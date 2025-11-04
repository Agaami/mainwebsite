interface FooterProps {
  onModalOpen: (modal: 'privacy' | 'terms') => void;
}

export const Footer = ({ onModalOpen }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-24 py-8 
      bg-dark-bg bg-opacity-30 backdrop-blur-sm 
      border-t border-glass-border"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
        flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
      >
        <span>
          © {currentYear} agaami ai labs. All rights reserved.
        </span>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <button 
            onClick={() => onModalOpen('privacy')} 
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => onModalOpen('terms')} 
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </button>
        </nav>
      </div>
    </footer>
  );
};