export const preprocessText = (text: string): string[] => {
  // Remove HTML tags from text
  const cleanText = text.replace(/(<([^>]+)>)/gi, "");

  // Tokenize text using a custom approach
  const tokens = cleanText
    .toLowerCase() // Convert text to lowercase
    .split(/\W+/) // Split by non-word characters (excluding apostrophes for contractions)
    .filter((token) => token.length > 0); // Filter out empty tokens

  return tokens;
};
