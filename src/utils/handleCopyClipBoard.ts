export const handleCopyClipBoard = async (baseUrl: string) => {
  const text = `${baseUrl}${location.pathname}`;
  await navigator.clipboard.writeText(text);
};
