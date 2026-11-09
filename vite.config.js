import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' 로 두면 github.io/저장소이름 주소와 커스텀 도메인 모두에서 동작합니다.
export default defineConfig({
  plugins: [react()],
  base: './'
});
