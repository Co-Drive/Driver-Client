export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  timeout = 300
): ((...args: Parameters<F>) => void) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<F>): void => {
    if (!timer) {
      func(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
};
