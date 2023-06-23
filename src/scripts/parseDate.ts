export const parseDate = (date: string | number): string => {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "numeric",
  });
};
