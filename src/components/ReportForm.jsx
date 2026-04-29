import React, { useState, useRef } from 'react';
import { Camera, MapPin, Navigation, Calendar, Send, Image as ImageIcon } from 'lucide-react';

export default function ReportForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    photo: null,
    location: '',
    date: new Date().toISOString().slice(0, 16), // datetime-local format
    description: '',
    behavior: ''
  });
  
  const [isLocating, setIsLocating] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGetLocation = (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      alert('Tu navegador no soporta geolocalización. Por favor ingresa la ubicación manualmente.');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(5);
        const lon = position.coords.longitude.toFixed(5);
        setFormData(prev => ({ ...prev, location: `Lat: ${lat}, Lon: ${lon}` }));
        setIsLocating(false);
      },
      (error) => {
        console.error(error);
        alert('No pudimos acceder a tu ubicación. Por favor ingrésala manualmente.');
        setIsLocating(false);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      photo: null,
      location: '',
      date: new Date().toISOString().slice(0, 16),
      description: '',
      behavior: ''
    });
    setPhotoPreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="card animate-fade-in" style={{ padding: '2.5rem' }}>
      
      {/* PHOTO SECTION */}
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="file" 
          accept="image/*" 
          capture="environment"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        
        {photoPreview ? (
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <img src={photoPreview} alt="Preview" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} />
            <button 
              type="button"
              onClick={() => { setPhotoPreview(null); setFormData(prev => ({...prev, photo: null})); }}
              style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ×
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              type="button" 
              onClick={() => fileInputRef.current.click()} 
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '200px', padding: '1.2rem' }}
            >
              <Camera size={24} />
              Tomar Foto Ahora
            </button>
            <button 
              type="button" 
              onClick={() => {
                // Remove capture attribute to open gallery/files
                fileInputRef.current.removeAttribute('capture');
                fileInputRef.current.click();
                // Add it back after a delay for next times
                setTimeout(() => fileInputRef.current.setAttribute('capture', 'environment'), 1000);
              }} 
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '200px', padding: '1.2rem' }}
            >
              <ImageIcon size={24} />
              Subir de Galería
            </button>
          </div>
        )}
        {!photoPreview && (
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            *Una foto es ideal, pero no obligatoria. Nunca pongas en riesgo tu seguridad para tomarla.
          </p>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {/* LOCATION */}
        <div className="input-group">
          <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={18} color="var(--color-blue-secondary)"/>
            Ubicación del avistamiento
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="input-field" 
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ej: Ruta 9 km 45, o coordenadas..."
              style={{ flex: 1 }}
              required
            />
            <button 
              type="button" 
              onClick={handleGetLocation}
              disabled={isLocating}
              className="btn btn-blue"
              title="Usar mi ubicación actual"
              style={{ padding: '0 1rem' }}
            >
              <Navigation size={20} className={isLocating ? 'animate-pulse' : ''} />
            </button>
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="input-group">
          <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={18} color="var(--color-blue-secondary)"/>
            Fecha y Hora
          </label>
          <input 
            type="datetime-local" 
            className="input-field" 
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* BEHAVIOR */}
      <div className="input-group" style={{ marginTop: '0.5rem' }}>
        <label className="input-label">¿Qué estaba haciendo el animal?</label>
        <select 
          className="input-field" 
          name="behavior"
          value={formData.behavior}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Selecciona una opción...</option>
          <option value="caminando">Caminando tranquilo / De paso</option>
          <option value="corriendo">Corriendo / Huyendo</option>
          <option value="observando">Observando escondido</option>
          <option value="cazando">Cazando / Comiendo</option>
          <option value="descansando">Descansando / Durmiendo</option>
          <option value="rastros">No obsevé al animal, solo rastros (huellas, heces)</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* DESCRIPTION */}
      <div className="input-group" style={{ marginTop: '0.5rem' }}>
        <label className="input-label">Detalles adicionales</label>
        <textarea 
          className="input-field" 
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe el entorno, tamaño aproximado, si había crías, etc..."
          rows="4"
          style={{ resize: 'vertical' }}
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem', marginTop: '1rem' }}
      >
        <Send size={22} />
        Enviar Reporte
      </button>

      <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
        Toda tu información es confidencial y se usará exclusivamente para fines de conservación.
      </p>
    </form>
  );
}
