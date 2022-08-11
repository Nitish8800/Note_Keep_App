export const disabledBtn = (title, tagline, body) => {
  return !title.trim() || !tagline.trim() || !body.trim();
};
