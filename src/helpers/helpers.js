export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const telFormatter = (value) => {
  return value
    .replace(/^\+7|\D/g, '')
    .replace(/^(\d{1,3})(\d{1,3})?(\d{1,2})?(\d{1,2})?.*/, (m, g1, g2, g3, g4) => `+7(${g1})` + (g2 ? `${g2}` : '') + (g3 ? `-${g3}` : '') + (g4 ? `-${g4}` : ''));
};
