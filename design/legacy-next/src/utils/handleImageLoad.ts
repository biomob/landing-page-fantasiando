export const handleImageLoad = (ref: React.MutableRefObject<any>) => {
  if (ref.current) {
    ref.current.dataset.loaded = "true";
  }
};
