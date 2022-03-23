import axios from 'axios';

// TODO dev-prod-Umgebungsvariable
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiClient;
