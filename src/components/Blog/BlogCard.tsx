import { motion } from 'framer-motion';
import { type Article } from '../../Services/blogService';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface BlogCardProps {
  article: Article;
  index: number;
}

export const BlogCard = ({ article, index }: BlogCardProps) => {
  
  // Format the date string
  const formattedDate = new Date(article.pub_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="glass-card rounded-xl h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-semibold text-primary mb-2">{article.category}</span>
        <h3 className="text-xl font-bold text-white mb-3 flex-grow">{article.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{article.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-cyan-300 bg-cyan-900/50 border border-cyan-800 rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-gray-500">{formattedDate}</span>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:text-cyan-300"
          >
            Read More <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
};