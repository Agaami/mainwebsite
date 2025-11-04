import axios from 'axios';

// 1. Get the URL from our .env file
const BLOG_API_URL = import.meta.env.VITE_BLOG_API_URL;

// 2. Define the types to match your backend
export interface Article {
  id: string;
  title: string;
  link: string;
  description: string;
  pub_date: string;
  category: string;
  tags: string[];
}

export interface ArticlesResponse {
  total: number;
  articles: Article[];
  categories: string[];
}

// 3. Create the axios instance
const blogApiClient = axios.create({
  baseURL: BLOG_API_URL,
});

// 4. Create the function to get articles
export const getArticles = async (): Promise<Article[]> => {
  try {
    const { data } = await blogApiClient.get<ArticlesResponse>('/articles');
    return data.articles;
  } catch (error) {
    console.error("Failed to fetch blog articles:", error);
    return []; // Return an empty array on error
  }
};