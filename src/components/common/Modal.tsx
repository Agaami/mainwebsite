import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="glass-card w-full max-w-3xl rounded-xl p-6 border-2 border-glass-border"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-glass-border">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>
          
          {/* Modal Body */}
          <div className="mt-6 max-h-[70vh] overflow-y-auto text-gray-300 space-y-4 pr-3">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};