import axios from 'axios';

// /api/vi endpoint가 붙지 않은 instance
export const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
});
