import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-blue-primary)', color: 'white', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--color-orange-accent)'}}>
                <path d="M12 2a10 10 0 1 0 10 10H12V2Z"/>
                <path d="M12 12 2.1 7.1"/>
                <path d="M12 12l9.9 4.9"/>
              </svg>
              Pumakawa
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              ONG dedicada a la recuperación de flora y fauna nativa de Córdoba, Argentina.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'white' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.53-4H14V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" style={{ color: 'white' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" style={{ color: 'white' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: 'white' }}>Contacto</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li className="flex items-center gap-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <MapPin size={18} color="var(--color-orange-accent)" />
                Villa Rumipal, Córdoba
              </li>
              <li className="flex items-center gap-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <Phone size={18} color="var(--color-orange-accent)" />
                +54 9 351 000-0000
              </li>
              <li className="flex items-center gap-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={18} color="var(--color-orange-accent)" />
                info@pumakawa.org
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: 'white' }}>Enlaces</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#mision" style={{ color: 'rgba(255,255,255,0.8)' }}>Nuestra Misión</a></li>
              <li><a href="#consejos" style={{ color: 'rgba(255,255,255,0.8)' }}>Consejos y Prevención</a></li>
              <li><a href="#report-form" style={{ color: 'rgba(255,255,255,0.8)' }}>Reportar un Avistamiento</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.8)' }}>Donar a la ONG</a></li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} ONG Pumakawa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
