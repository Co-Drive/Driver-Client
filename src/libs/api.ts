import axios, { AxiosInstance } from 'axios';

// axios instance 변수
let apiInstance: AxiosInstance | null;

export const api = () => {
  // axios instance가 존재하지 않는 경우에만 새로운 인스턴스 생성
  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_URL,
    });
  }

  const token = sessionStorage.getItem('token');
  //   토큰과 인스턴스가 존재하는 경우, 헤더의 토큰 값을 axios header defaults로 정의
  if (token && apiInstance) {
    const headerToken = apiInstance.defaults.headers.common.Authorization;

    // 헤더에 기본 토큰 값이 존재하지 않거나 스토리지에 저장된 토큰 값과 헤더의 토큰 값이 다른 경우 axios header defaults 재정의
    if (!headerToken || token !== headerToken.toString().split(' ')[1]) {
      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  return apiInstance;
};
