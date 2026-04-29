import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '6rem 0',
    color: 'white',
    // We use a dark gradient over a placeholder image. The user can replace the image later.
    background: `linear-gradient(to right, rgba(18, 105, 175, 0.9), rgba(0, 156, 223, 0.6)), url('https://images.unsplash.com/photo-1600868212130-1cdef9dca5c0?auto=format&fit=crop&w=1920&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section style={heroStyle}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '650px' }} className="animate-slide-up">
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            padding: '0.4rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            Conservación de la Fauna Nativa
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '1.5rem',
            lineHeight: 1.1 
          }}>
            Ayudanos a proteger al <span style={{ color: 'var(--color-orange-accent)' }}>Puma</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.15rem', 
            marginBottom: '2.5rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.6
          }}>
            En Pumakawa trabajamos para la recuperación de la fauna y el monte nativo.
            Tus reportes de avistamientos de pumas son vitales para entender su comportamiento, 
            mapear su territorio y prevenir conflictos con humanos.
          </p>
          
          <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
            <a href="#report-form" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <Camera size={22} />
              Reportar Avistamiento
            </a>
            <a href="#mision" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
              Saber más <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative wave separator at the bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ display: 'block', width: '100%', height: 'auto' }}>
          <path fill="var(--color-background)" fillOpacity="1" d="M0,256L48,250.7C96,245,192,235,288,213.3C384,192,480,160,576,160C672,160,768,192,864,224C960,256,1056,288,1152,282.7C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
