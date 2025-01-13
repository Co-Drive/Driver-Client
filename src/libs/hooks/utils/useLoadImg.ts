import { useEffect, useState } from 'react';

const useLoadImg = ({
  imgRef,
  imgSrc,
}: {
  imgRef: React.RefObject<HTMLImageElement>;
  imgSrc: string;
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  useEffect(() => {
    if (!imgRef.current) return;

    const changeIsLoading = (img: HTMLImageElement) => {
      if (img) {
        const isLoadComplete = img.complete && img.naturalHeight !== 0;
        setIsImgLoaded(isLoadComplete);
      }
    };

    const handleLoad = () =>
      changeIsLoading(imgRef.current as HTMLImageElement);

    // once 옵션을 활용하여 이멘트 핸들러가 한 번만 호출되고, 이후 자동으로 제거되도록 구현
    // load 이벤트는 이미지가 최초로 로드될 때만 발생하는 이벤트 -> 이미지가 이미 로드된 상태라면, 브라우저는 새로운 load 이벤트를 발생시키지 않음.

    // 옵션 사용 : 이미지 로드 -> load 이벤트 발생 -> 이벤트 핸들러 실행 -> 상태 업데이트 -> 이벤트 리스너 자동 제거 => 결과: 상태가 정확히 한 번 업데이트 후 불필요한 이벤트 리스너가 남지 않음.
    // 옵션 미사용: 이미지 로드 -> load 이벤트 발생 -> 이벤트 핸들러 실행 -> 상태 업데이트 -> 이벤트 리스너 유지
    // 이미지가 이미 로드된 경우)) 이미지 로드됨(완료) -> load 이벤트 발생하지 않음 -> 이벤트 핸들러 실행되지 않음 -> 상태 업데이트 실패 => 결과: 상태가 초기 상태로 남음. 이미 로드된 이미지는 load 이벤트가 다시 발생하지 않음.
    imgRef.current.addEventListener('load', handleLoad, { once: true });

    return () => {
      if (imgRef.current)
        imgRef.current.removeEventListener('load', handleLoad);
    };
  }, [imgSrc]);

  return isImgLoaded;
};

export default useLoadImg;
