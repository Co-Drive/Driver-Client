import { useEffect, useState } from 'react';

const useGetSessionStorage = (item: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    return sessionStorage.getItem(item);
  });

  // 값이 업데이트되는지 감시하기 위해 주기적으로 확인
  useEffect(() => {
    const checkStoredValue = () => {
      const newValue = sessionStorage.getItem(item);
      if (newValue !== storedValue) {
        setStoredValue(newValue);
      }
    };

    // 1초마다 sessionStorage를 확인
    const intervalId = setInterval(checkStoredValue, 1000);

    // Cleanup 함수로 주기 확인 종료
    return () => clearInterval(intervalId);
  }, [item, storedValue]);

  return storedValue;
};

export default useGetSessionStorage;
