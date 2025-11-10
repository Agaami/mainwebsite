import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingShapes } from './components/Background/FloatingShapes';
import { InteractiveCameraRig } from './components/Background/InteractiveCameraRig';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Modal } from './components/common/Modal';

// Import pages
import { HomePage } from './pages/HomePage';
import { QuantumDashPage } from './pages/QuantumDashPage';
import { KycSuitePage } from './pages/KycSuitePage';
import { CustomAiPage } from './pages/CustomAiPage';
import { BlogPage } from './pages/BlogPage';
import { StockFlowPage } from './pages/StockFlowPage';

// ... (modalData is unchanged) ...
const modalData = { 
  privacy: {
    title: "Privacy Policy",
    content: (
      <>
        <p>Your privacy is important to us. It is agaami ai labs' policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent...</p>
        <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
      </>
    )
  },
  terms: {
    title: "Terms of Service",
    content: (
      <>
        <p>By accessing the website at agaami ai labs, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        <p>Permission is granted to temporarily download one copy of the materials on agaami ai labs' website for personal, non-commercial transitory viewing only...</p>
      </>
    )
  }
};

function App() {
  const [modalContent, setModalContent] = useState<null | 'privacy' | 'terms'>(null);

  return (
    <div className="relative w-full h-full min-h-screen">
      
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Canvas>
          <Suspense fallback={null}>
            <FloatingShapes />
            <InteractiveCameraRig />
          </Suspense>
        </Canvas>
      </div>

      <Header />

      <main className="relative z-10 flex flex-col items-center w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/quantumdash" element={<QuantumDashPage />} />
          <Route path="/products/kyc-suite" element={<KycSuitePage />} />
          <Route path="/products/custom-ai" element={<CustomAiPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/products/stock-flow" element={<StockFlowPage />} />
        </Routes>
      </main>

      <Footer onModalOpen={setModalContent} />

      {modalContent && (
        <Modal 
          title={modalData[modalContent].title} 
          onClose={() => setModalContent(null)}
        >
          {modalData[modalContent].content}
        </Modal>
      )}
    </div>
  );
}

export default App;
