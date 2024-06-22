export const truncateExcerpt = (excerpt: string, maxLength: number = 100) => {
  if (excerpt.length <= maxLength) return excerpt;
  return excerpt.slice(0, maxLength) + "...";
};
