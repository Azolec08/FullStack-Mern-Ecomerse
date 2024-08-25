export const getFullImageUrl = (url: string | undefined) => {
  if (!url) return "";
  return `${import.meta.env.VITE_REACT_APP_UPLOAD_URL}${url}`;
};
