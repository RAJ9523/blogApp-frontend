import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: 'https://blogapp-api-811v.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
