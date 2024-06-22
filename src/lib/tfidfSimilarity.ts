//@ts-ignore
import TfIdf from "tf-idf";
import { preprocessText } from "./textProcessing";
import { Post } from "@/types";

// Create a new instance of TfIdf for each function call to avoid accumulation of documents from previous calls
export const calculateTfIdfSimilarity = (
  targetPost: Post,
  allPosts: Post[]
): Post[] => {
  const tfidf = new TfIdf();

  const targetText = targetPost.content.rendered.replace(/(<([^>]+)>)/gi, ""); // Remove HTML tags
  const targetTokens = preprocessText(targetText);

  // Add all posts to the TF-IDF model
  allPosts.forEach((post) => {
    const text = post.content.rendered.replace(/(<([^>]+)>)/gi, ""); // Remove HTML tags
    const tokens = preprocessText(text);
    tfidf.addDocument(tokens.join(" "));
  });

  // Calculate similarity
  const targetDocIndex = allPosts.findIndex(
    (post) => post.id === targetPost.id
  );
  const similarities: { post: Post; similarity: number }[] = [];

  tfidf.documents.forEach((doc: string, index: number) => {
    if (index !== targetDocIndex) {
      const docTokens = preprocessText(doc);
      const targetTfIdf = tfidf.tfidf(targetTokens.join(" "), index);
      const similarity = tfidf.similarity(targetTfIdf, docTokens.join(" "));
      similarities.push({ post: allPosts[index], similarity });
    }
  });

  // Sort by similarity score
  similarities.sort((a, b) => b.similarity - a.similarity);

  // Return the top 5 most similar posts
  return similarities.slice(0, 5).map((item) => item.post);
};
