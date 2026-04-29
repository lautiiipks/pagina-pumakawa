import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SuccessModal({ onClose }) {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1rem'
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: 'var(--radius-xl)',
    padding: '3rem 2rem',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    boxShadow: 'var(--shadow-lg)'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} className="animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <CheckCircle size={80} color="var(--color-orange-accent)" fill="var(--color-orange-accent)" stroke="white" />
        </div>
        
        <h2 style={{ fontSize: '2rem', color: 'var(--color-blue-primary)', marginBottom: '1rem' }}>
          ¡Reporte Enviado!
        </h2>
        
        <p style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          Muchas gracias por tu compromiso. Tu reporte nos provee información sumamente valiosa 
          para continuar protegiendo al puma y promoviendo la coexistencia armónica en la región.
        </p>
        
        <button className="btn btn-primary" onClick={onClose} style={{ width: '100%', padding: '1rem' }}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
