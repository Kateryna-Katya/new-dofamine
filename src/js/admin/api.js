const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5050/api';

export function getToken() {
  return localStorage.getItem('token');
}

export function setToken(token) {
  localStorage.setItem('token', token);
}

export function clearToken() {
  localStorage.removeItem('token');
}

export async function apiFetch(path, options = {}) {
  const token = getToken();

  const headers = {
    ...(options.headers || {}),
  };

  // если есть body → ставим JSON
  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, { ...options, headers });

  // если токен умер → на логин
  if (res.status === 401) {
    clearToken();
    window.location.href = '/login.html';
    return;
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || `HTTP ${res.status}`);
  }

  return data;
}
export { BASE };