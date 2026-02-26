import { apiFetch, setToken, getToken } from './api.js';

if (getToken()) window.location.href = '/admin.html';

const form = document.querySelector('#loginForm');
const errorEl = document.querySelector('#loginError');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorEl.textContent = '';

  const name = form.name.value.trim();
  const password = form.password.value;

  try {
    const data = await apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
    });

    setToken(data.token);
    window.location.href = '/admin.html';
  } catch (err) {
    errorEl.textContent = err.message;
  }
});