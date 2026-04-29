import React from 'react';
import { Target, Leaf, HeartHandshake } from 'lucide-react';

export default function InfoSection() {
  const features = [
    {
      icon: <Target size={32} color="var(--color-blue-secondary)" />,
      title: "Monitoreo Constante",
      description: "Tu reporte nos ayuda a mapear las zonas de tránsito del puma, lo que nos permite establecer estrategias de prevención efectivas en campos y rutas."
    },
    {
      icon: <HeartHandshake size={32} color="var(--color-orange-accent)" />,
      title: "Prevención de Conflictos",
      description: "Con información precisa podemos alertar y educar a los pobladores y productores locales, promoviendo prácticas que eviten incidentes con el ganado."
    },
    {
      icon: <Leaf size={32} color="var(--color-blue-primary)" />,
      title: "Conservación Activa",
      description: "El puma es un especie clave (paraguas) en nuestro ecosistema. Protegerlo significa asegurar el equilibrio de toda la flora y fauna de Córdoba."
    }
  ];

  return (
    <section id="mision" className="section bg-white" style={{ position: 'relative', zIndex: 5 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-slide-up">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-blue-primary)', marginBottom: '1rem' }}>
            ¿Por qué es importante reportar?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Cada avistamiento, sea directo (ver al animal) o indirecto (huellas, heces, presas), 
            es una pieza fundamental para nuestro trabajo de investigación y mitigación de conflictos.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, index) => (
            <div key={index} className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(0, 156, 223, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
