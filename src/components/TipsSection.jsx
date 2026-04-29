import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function TipsSection() {
  const dos = [
    "Mantener la calma, no correr.",
    "Levantar los brazos para parecer más grande.",
    "Si estás con niños, alzarlos sin quitar la vista del animal.",
    "Retroceder lentamente, siempre mirando al puma.",
    "Si el puma se acerca, gritar fuerte o hacer ruido con objetos."
  ];

  const donts = [
    "No acercarse al animal, incluso si parece manso.",
    "No darle la espalda bajo ninguna circunstancia.",
    "No agacharse o sentarse, ya que te hace ver como presa.",
    "No bloquear sus vías de escape o arrinconarlo.",
    "No ofrecerle comida o tratar de atraerlo."
  ];

  return (
    <section id="consejos" className="section" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
      <div className="container">
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: 'var(--color-blue-primary)', 
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          ¿Qué hacer ante un avistamiento?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* QUE HACER */}
          <div className="card" style={{ borderTop: '4px solid #10b981' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 color="#10b981" fill="#10b981" stroke="white" size={36} />
              <h3 style={{ fontSize: '1.5rem', color: '#065f46' }}>HACER</h3>
            </div>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {dos.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ marginTop: '0.25rem', minWidth: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                  <span style={{ color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QUE NO HACER */}
          <div className="card" style={{ borderTop: '4px solid var(--color-orange-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <XCircle color="var(--color-orange-accent)" fill="var(--color-orange-accent)" stroke="white" size={36} />
              <h3 style={{ fontSize: '1.5rem', color: 'rgb(170, 75, 10)' }}>NO HACER</h3>
            </div>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {donts.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ marginTop: '0.25rem', minWidth: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-orange-accent)' }}></div>
                  <span style={{ color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
