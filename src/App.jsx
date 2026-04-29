import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import TipsSection from './components/TipsSection';
import ReportForm from './components/ReportForm';
import SuccessModal from './components/SuccessModal';
import Footer from './components/Footer';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleReportSubmit = (data) => {
    // Aquí iría la lógica para enviar al servidor/base de datos
    console.log("Reporte enviado:", data);
    setShowSuccess(true);
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <TipsSection />
        <section id="report-form" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="animate-slide-up">
              <h2 style={{ fontSize: '2rem', color: 'var(--color-blue-primary)', marginBottom: '1rem' }}>
                Reportar Avistamiento
              </h2>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Tu aporte es fundamental. Completa el formulario con la mayor precisión posible.
              </p>
            </div>
            <ReportForm onSubmit={handleReportSubmit} />
          </div>
        </section>
      </main>
      <Footer />
      
      {showSuccess && <SuccessModal onClose={closeSuccessModal} />}
    </div>
  );
}

export default App;
