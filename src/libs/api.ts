import axios, { AxiosInstance } from 'axios';

// axios instance 변수
let apiInstance: AxiosInstance | null;

const API = () => {
  // axios instance가 존재하지 않는 경우에만 새로운 인스턴스 생성
  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: 'http://codrive.co.kr:8080',
    });
  }

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzIyNTMxNTY3fQ.KcFk-vVEyMxHkwZwkLp9P2NnZWmvWgr-KCwpZdajrh-lD1OrWwqkl5Zww7xSM23XfyIUm55D_7Nr6Lb7WFN57Q';
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

// () => AxiosInstance 형태인 API 활용 시, API().get('/') 과 같은 형태로 사용해야 함
// AxiosInstance를 바로 활용하기 위해 새로운 변수에 API() 할당 -> api.get('/) 형태로 사용할 수 있도록 함
export const api = API();
