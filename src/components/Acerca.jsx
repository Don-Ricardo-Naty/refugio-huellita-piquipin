// src/components/Acerca.jsx

function Acerca() {
	return (
		<section style={{
			padding: '40px 20px',
			maxWidth: '850px',
			margin: '0 auto',
			fontFamily: 'Arial, sans-serif'
		}}>
			{/* SECCIÓN INTRODUCTORIA: HISTORIA FICTICIA */}
			<div style={{
				textAlign: 'center',
				marginBottom: '40px',
				backgroundColor: '#f8f9fa',
				padding: '30px',
				borderRadius: '12px',
				boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
			}}>
				<h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Quiénes Somos 🤝</h2>
				<p style={{
					lineHeight: '1.6',
					color: '#34495e',
					fontSize: '1.05rem',
					maxWidth: '700px',
					margin: '0 auto',
					textAlign: 'justify'
				}}>
					Nuestra organización comenzó con una sola persona, una idea y un profundo deseo de generar un cambio en el entorno. Al principio, todo se gestionaba desde un pequeño comedor, enfrentando los desafíos a puro pulmón. Con el paso del tiempo, la comunidad empezó a notar el impacto de nuestras acciones y la voz se corrió. Hoy, nos hemos transformado en un equipo multidisciplinario de voluntarios y profesionales unidos por la misma causa, demostrando que la empatía colectiva puede lograr lo que parecía imposible.
				</p>
			</div>

			<hr style={{ border: '0', height: '1px', backgroundColor: '#eaeded', marginBottom: '40px' }} />

			{/* TÍTULO DEL ANTES Y DESPUÉS */}
			<div style={{ textAlign: 'center', marginBottom: '30px' }}>
				<h3 style={{ color: '#2c3e50', margin: '0 0 5px 0' }}>Nuestra Gran Inspiración 🐾</h3>
				<p style={{ color: '#7f8c8d', margin: 0, fontSize: '0.95rem' }}>
					El caso real que encendió la chispa de todo nuestro proyecto.
				</p>
			</div>

			{/* CONTENEDOR DEL ANTES Y DESPUÉS (MÁS COMPACTO) */}
			<div style={{
				display: 'flex',
				gap: '20px',
				flexWrap: 'wrap',
				justifyContent: 'center'
			}}>

				{/* TARJETA COMPACTA: EL ANTES */}
				<div style={{
					flex: '1',
					minWidth: '240px',
					maxWidth: '340px', // Casilla más pequeña
					backgroundColor: '#fdf2e9',
					padding: '15px',
					borderRadius: '12px',
					boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
					borderTop: '5px solid #e67e22'
				}}>
					<div style={{ textAlign: 'center', marginBottom: '12px' }}>
						<img
							src="/antes.png"
							alt="Antes del rescate"
							style={{
								width: '180px',      // Imagen pequeña fija para cuidar la resolución
								height: '140px',     // Altura controlada
								objectFit: 'cover',
								borderRadius: '8px',
								filter: 'grayscale(25%)'
							}}
						/>
					</div>
					<h4 style={{ color: '#d35400', margin: '0 0 8px 0', textAlign: 'center' }}>El Antes 💔</h4>
					<p style={{ lineHeight: '1.5', color: '#566573', fontSize: '0.9rem', textAlign: 'justify', margin: 0 }}>
						Fue rescatado de una casa en condiciones deplorables, conviviendo con muchos otros gatos totalmente abandonados y sin los cuidados básicos. El hacinamiento hacía imposible su bienestar.
					</p>
				</div>

				{/* TARJETA COMPACTA: EL DESPUÉS */}
				<div style={{
					flex: '1',
					minWidth: '240px',
					maxWidth: '340px', // Casilla más pequeña
					backgroundColor: '#e8f8f5',
					padding: '15px',
					borderRadius: '12px',
					boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
					borderTop: '5px solid #2ecc71'
				}}>
					<div style={{ textAlign: 'center', marginBottom: '12px' }}>
						<img
							src="/despues.png"
							alt="Después del rescate"
							style={{
								width: '180px',      // Imagen pequeña fija para cuidar la resolución
								height: '140px',     // Altura controlada
								objectFit: 'cover',
								borderRadius: '8px'
							}}
						/>
					</div>
					<h4 style={{ color: '#27ae60', margin: '0 0 8px 0', textAlign: 'center' }}>El Después ❤️</h4>
					<p style={{ lineHeight: '1.5', color: '#2c3e50', fontSize: '0.9rem', textAlign: 'justify', margin: 0 }}>
						Hoy vive una vida plena, sana y feliz. Su rehabilitación nos demostró que con empatía y acciones concretas podemos transformar realidades y reescribir historias por completo.
					</p>
				</div>

			</div>

			{/* FRASE DE CIERRE */}
			<div style={{ marginTop: '35px', textAlign: 'center' }}>
				<p style={{ fontStyle: 'italic', color: '#95a5a6', fontSize: '1rem', margin: 0 }}>
					"Empezamos siendo uno solo, hoy somos una comunidad que protege."
				</p>
			</div>

		</section>
	);
}

export default Acerca;