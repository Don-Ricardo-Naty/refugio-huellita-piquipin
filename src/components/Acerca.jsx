// src/components/Acerca.jsx

export default function Acerca() {
	// Estilos simples y ordenados
	const contenedorEstilo = {
		padding: '20px',
		maxWidth: '800px',
		margin: '0 auto',
		fontFamily: 'sans-serif'
	};

	const tarjetaEstilo = {
		backgroundColor: '#f8f9fa',
		padding: '20px',
		borderRadius: '8px',
		marginBottom: '20px'
	};

	const columnasEstilo = {
		display: 'flex',
		gap: '20px',
		flexWrap: 'wrap',
		justifyContent: 'center'
	};

	return (
		<section style={contenedorEstilo}>

			{/* Historia del refugio */}
			<div style={tarjetaEstilo}>
				<h2 style={{ color: '#2c3e50' }}>Quiénes Somos 🤝</h2>
				<p style={{ lineHeight: '1.6', color: '#333' }}>
					Nuestra organización comenzó con una sola persona, una idea y un profundo deseo de generar un cambio en el entorno. Al principio, todo se gestionaba desde un pequeño comedor, enfrentando los desafíos a puro pulmón. Con el paso del tiempo, la comunidad empezó a notar el impacto de nuestras acciones y la voz se corrió. Hoy, nos hemos transformado en un equipo de voluntarios unidos por la misma causa.
				</p>
			</div>

			<hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '30px 0' }} />

			{/* Caso de éxito antes y despues */}
			<div style={{ textAlign: 'center', marginBottom: '20px' }}>
				<h3 style={{ color: '#2c3e50' }}>Nuestra Gran Inspiración 🐾</h3>
				<p style={{ color: '#7f8c8d' }}>El caso real que comenzó todo nuestro proyecto.</p>
			</div>

			<div style={columnasEstilo}>

				{/* Tarjeta: Antes */}
				<div style={{ ...tarjetaEstilo, backgroundColor: '#fdf2e9', flex: '1', minWidth: '250px' }}>
					<div style={{ textAlign: 'center', marginBottom: '10px' }}>
						<img
							src="/antes.png"
							alt="Antes"
							style={{ width: '150px', height: '120px', objectFit: 'cover', borderRadius: '4px' }}
						/>
					</div>
					<h4 style={{ color: '#d35400', textAlign: 'center' }}>El Antes 💔</h4>
					<p style={{ fontSize: '0.9rem', color: '#555' }}>
						Fue rescatado de una casa en condiciones deplorables, conviviendo con muchos otros gatos totalmente abandonados y sin los cuidados básicos.
					</p>
				</div>

				{/* Tarjeta: Después */}
				<div style={{ ...tarjetaEstilo, backgroundColor: '#e8f8f5', flex: '1', minWidth: '250px' }}>
					<div style={{ textAlign: 'center', marginBottom: '10px' }}>
						<img
							src="/despues.png"
							alt="Después"
							style={{ width: '150px', height: '120px', objectFit: 'cover', borderRadius: '4px' }}
						/>
					</div>
					<h4 style={{ color: '#27ae60', textAlign: 'center' }}>El Después ❤️</h4>
					<p style={{ fontSize: '0.9rem', color: '#555' }}>
						Hoy vive una vida plena, sana y feliz. Su rehabilitación nos demostró que con empatía y acciones concretas podemos transformar realidades.
					</p>
				</div>

			</div>

			<div style={{ marginTop: '30px', textAlign: 'center' }}>
				<p style={{ fontStyle: 'italic', color: '#888' }}>
					"Empezamos siendo uno solo, hoy somos una comunidad que protege."
				</p>
			</div>

		</section>
	);
}