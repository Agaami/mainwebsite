import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { type Article, getArticles } from '../Services/blogService';
import { BlogCard } from '../components/Blog/BlogCard';

export const BlogPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      const data = await getArticles();
      setArticles(data);
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  return (
    <section className="w-full min-h-screen pt-32 pb-20">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* --- Header --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            AI Industry News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Curated articles and insights on the future of Artificial Intelligence.
          </p>
        </motion.div>

        {/* --- Articles Grid --- */}
        {isLoading ? (
          <div className="text-center text-white text-2xl">Loading articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlogCard key={article.id} article={article} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};