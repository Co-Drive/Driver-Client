interface handleCopyClipBoardProps {
  baseUrl?: string;
  isUsedBaseUrl: boolean;
}

export const handleCopyClipBoard = async ({
  baseUrl,
  isUsedBaseUrl,
}: handleCopyClipBoardProps) => {
  const text = isUsedBaseUrl
    ? `${baseUrl}`
    : window.location.href;
  await navigator.clipboard.writeText(text);
};
