const local = import.meta.env.VITE_BACKEND_LOCAL;
const deployed = import.meta.env.VITE_BACKEND_DEPLOYED;

export const API_URL = import.meta.env.DEV ? local : deployed;
