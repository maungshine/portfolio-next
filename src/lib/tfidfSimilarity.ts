//@ts-ignore
import * as TFIDF from 'tf-idf.js';
import { Post } from '@/types';
import { preprocessText } from './textProcessing';

// Function to calculate TF-IDF similarity
export const calculateTfIdfSimilarity = (
  targetPost: Post,
  allPosts: Post[]
): Post[] => {
  // Initialize TF-IDF instance
  const tfidf = new TFIDF();

  // Preprocess target post text
  const targetText = targetPost.content.rendered.replace(/(<([^>]+)>)/gi, ''); // Remove HTML tags
  const targetTokens = preprocessText(targetText);

  // Add documents to TF-IDF model
  allPosts.forEach(post => {
    const text = post.content.rendered.replace(/(<([^>]+)>)/gi, ''); // Remove HTML tags
    const tokens = preprocessText(text);
    tfidf.addDocument(post.id.toString(), tokens.join(' ')); // Add document with identifier
  });

  // Calculate similarities
  const similarities: { post: Post; similarity: number }[] = [];

  allPosts.forEach(post => {
    if (post.id !== targetPost.id) {
      const postDocId = post.id.toString();
      let similarity = 0;

      // Calculate similarity using TF-IDF
      tfidf.tfidfs(targetTokens.join(' '), (token: string, tfidfScore: number, docId: string) => {
        if (docId === postDocId) {
          similarity += tfidfScore;
        }
      });

      similarities.push({ post, similarity });
    }
  });

  // Sort by similarity score (descending)
  similarities.sort((a, b) => b.similarity - a.similarity);

  // Return top 5 most similar posts
  return similarities.slice(0, 5).map(item => item.post);
};
