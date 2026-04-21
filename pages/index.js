import React, { useState } from 'react';
import { MapPin, Star } from 'lucide-react';
import Head from 'next/head';

export default function ALIAMarketplace() {
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [userRating, setUserRating] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const lawyers = [
    {
      id: 1,
      name: 'María Rodríguez',
      specialty: 'Derecho Laboral',
      location: 'Santiago',
      rating: 4.8,
      reviews: 247,
      bio: 'Especialista en conflictos laborales y negociaciones colectivas con 12 años de experiencia.',
      image: '👩‍⚖️',
      price: '$150.000',
      verified: true
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      specialty: 'Derecho Comercial',
      location: 'Valparaíso',
      rating: 4.9,
      reviews: 189,
      bio: 'Experto en contratos comerciales y negocios internacionales. Más de 15 años de trayectoria.',
      image: '👨‍⚖️',
      price: '$200.000',
      verified: true
    },
    {
      id: 3,
      name: 'Alejandra López',
      specialty: 'Derecho Familia',
      location: 'Viña del Mar',
      rating: 4.7,
      reviews: 156,
      bio: 'Especialidad en divorcios, custodia y mediación familiar. Enfoque integral y empático.',
      image: '👩‍⚖️',
      price: '$120.000',
      verified: true
    },
    {
      id: 4,
      name: 'Roberto Silva',
      specialty: 'Derecho Penal',
      location: 'Concepción',
      rating: 4.6,
      reviews: 201,
      bio: 'Defensor penal con experiencia en casos complejos y crimen corporativo.',
      image: '👨‍⚖️',
      price: '$180.000',
      verified: true
    },
    {
      id: 5,
      name: 'Patricia González',
      specialty: 'Derecho Tributario',
      location: 'Santiago',
      rating: 4.9,
      reviews: 134,
      bio: 'Experta en optimización fiscal y asesoría tributaria para PYMES y grandes empresas.',
      image: '👩‍⚖️',
      price: '$170.000',
      verified: true
    },
    {
      id: 6,
      name: 'Fernando Acosta',
      specialty: 'Derecho Inmobiliario',
      location: 'Los Ángeles',
      rating: 4.5,
      reviews: 98,
      bio: 'Especialista en compraventa, arrendamiento y propiedad intelectual.',
      image: '👨‍⚖️',
      price: '$140.000',
      verified: true
    }
  ];

  const filteredLawyers = lawyers.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const StarRating = ({ rating, size = 'sm', interactive = false, lawyerId }) => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    
    return (
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          {stars.map(star => (
            <button
              key={star}
              onClick={() => interactive && setUserRating({ ...userRating, [lawyerId]: star })}
              style={{
                background: 'none',
                border: 'none',
                cursor: interactive ? 'pointer' : 'default',
                fontSize: size === 'lg' ? '24px' : '16px',
                opacity: star <= (userRating[lawyerId] || rating) ? 1 : 0.2,
                transition: 'opacity 0.2s'
              }}
            >
              ★
            </button>
          ))}
        </div>
        <span style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>
          {(userRating[lawyerId] || rating).toFixed(1)}
        </span>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>ALIA - Asesoría Legal Inteligente Aplicada</title>
        <meta name="description" content="Marketplace de abogados en Chile. Conecta con profesionales legales verificados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #f9fafb;
          color: #1f2937;
        }
        button {
          font-family: inherit;
        }
        button:hover {
          opacity: 0.8;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Header */}
        <div 
          style={{ 
            padding: '2rem 1.5rem', 
            background: 'linear-gradient(135deg, #0f3a7d 0%, #1a4a9e 100%)',
            color: 'white',
            borderRadius: '12px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          <h1 style={{ margin: '0 0 0.5rem', fontSize: '32px', fontWeight: '600' }}>ALIA</h1>
          <p style={{ margin: '0 0 1.5rem', fontSize: '14px', opacity: 0.9 }}>
            Asesoría Legal Inteligente Aplicada
          </p>
          <p style={{ margin: '0', fontSize: '13px', opacity: 0.8 }}>
            Conecta con abogados verificados en Chile
          </p>
        </div>

        {/* Search & Auth */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '2rem', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Buscar por nombre, especialidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '14px',
              width: '100%'
            }}
          />
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ 
              flex: 1,
              minWidth: '200px',
              padding: '12px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              Continuar con Google
            </button>
            <button style={{ 
              flex: 1,
              minWidth: '200px',
              padding: '12px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              Continuar con Meta
            </button>
          </div>
        </div>

        {/* Lawyers Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '2rem'
        }}>
          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              onClick={() => setSelectedLawyer(lawyer)}
              style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0f3a7d';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 58, 125, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Avatar Section */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ 
                  fontSize: '48px',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f3f4f6',
                  borderRadius: '8px'
                }}>
                  {lawyer.image}
                </div>
                {lawyer.verified && (
                  <div style={{
                    background: '#10b981',
                    color: 'white',
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: '600'
                  }}>
                    Verificado
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '600' }}>
                  {lawyer.name}
                </h3>
                <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#6b7280' }}>
                  {lawyer.specialty}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                  <MapPin size={12} />
                  {lawyer.location}
                </div>
              </div>

              {/* Rating */}
              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '8px' }}>
                <StarRating rating={lawyer.rating} size="sm" />
                <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#6b7280' }}>
                  {lawyer.reviews} reseñas
                </p>
              </div>

              {/* Price */}
              <div style={{ 
                background: '#f3f4f6',
                padding: '8px',
                borderRadius: '6px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: '600'
              }}>
                {lawyer.price} / consulta
              </div>
            </div>
          ))}
        </div>

        {/* Lawyer Detail Modal */}
        {selectedLawyer && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '80vh',
              overflow: 'auto'
            }}>
              {/* Close Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Perfil Completo</h2>
                <button
                  onClick={() => setSelectedLawyer(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Profile Header */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  fontSize: '64px',
                  margin: '0 0 12px',
                  background: '#f3f4f6',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'inline-block'
                }}>
                  {selectedLawyer.image}
                </div>
                <h1 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: '600' }}>
                  {selectedLawyer.name}
                </h1>
                <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#6b7280' }}>
                  {selectedLawyer.specialty}
                </p>
                <StarRating 
                  rating={selectedLawyer.rating} 
                  size="lg"
                  interactive={true}
                  lawyerId={selectedLawyer.id}
                />
                <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#6b7280' }}>
                  {selectedLawyer.reviews} reseñas
                </p>
              </div>

              {/* Details */}
              <div style={{ 
                background: '#f9fafb',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <table style={{ width: '100%', fontSize: '13px' }}>
                  <tbody>
                    <tr>
                      <td style={{ paddingBottom: '8px', color: '#6b7280' }}>Ubicación</td>
                      <td style={{ textAlign: 'right', paddingBottom: '8px', fontWeight: '500' }}>{selectedLawyer.location}</td>
                    </tr>
                    <tr>
                      <td style={{ paddingBottom: '8px', color: '#6b7280' }}>Tarifa</td>
                      <td style={{ textAlign: 'right', paddingBottom: '8px', fontWeight: '500' }}>{selectedLawyer.price}</td>
                    </tr>
                    <tr>
                      <td style={{ color: '#6b7280' }}>Estado</td>
                      <td style={{ textAlign: 'right', fontWeight: '500', color: '#10b981' }}>Verificado</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bio */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: '600' }}>Acerca de</h3>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#6b7280' }}>
                  {selectedLawyer.bio}
                </p>
              </div>

              {/* Rating Section */}
              <div style={{ 
                background: '#f9fafb',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: '600' }}>Califica a este abogado</h3>
                <StarRating 
                  rating={userRating[selectedLawyer.id] || 0}
                  size="lg"
                  interactive={true}
                  lawyerId={selectedLawyer.id}
                />
                {userRating[selectedLawyer.id] && (
                  <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#6b7280' }}>
                    Tu calificación: {userRating[selectedLawyer.id]} ★
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ 
                  flex: 1,
                  padding: '12px 16px',
                  background: '#0f3a7d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}>
                  Contactar
                </button>
                <button 
                  onClick={() => setSelectedLawyer(null)}
                  style={{ 
                    flex: 1,
                    padding: '12px 16px',
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
