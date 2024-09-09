import axios, { AxiosInstance } from 'axios';

// axios instance 변수
let apiInstance: AxiosInstance | null;

const API = () => {
  // axios instance가 존재하지 않는 경우에만 새로운 인스턴스 생성
  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_URL,
    });
  }

  // Request interceptor를 통해 매번 요청 전에 토큰을 동적으로 설정
  apiInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  apiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          api
            .post('/auth/refresh', {
              accessToken: sessionStorage.getItem('token'),
              refreshToken: sessionStorage.getItem('refresh'),
            })
            .then((res) => {
              const accessToken = res.data.data.accessToken;
              sessionStorage.setItem('token', accessToken);
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
              return axios(originalRequest);
            })
            .catch((err) => {
              if (err.response.status === 401) {
                sessionStorage.clear();
                window.location.href = '/';
              }
            });
        } catch (err) {
          console.log(err);
          sessionStorage.clear();
          window.location.href = '/';
        }
      }

      return Promise.reject(error);
    }
  );

  return apiInstance;
};

// () => AxiosInstance 형태인 API 활용 시, API().get('/') 과 같은 형태로 사용해야 함
// AxiosInstance를 바로 활용하기 위해 새로운 변수에 API() 할당 -> api.get('/) 형태로 사용할 수 있도록 함
export const api = API();
