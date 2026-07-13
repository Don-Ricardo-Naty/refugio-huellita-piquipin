// src/components/Acerca.jsx

function Acerca() {
	// Estilos agrupados para que el código de abajo sea fácil de leer
	const estilos = {
		seccion: { padding: '30px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' },
		intro: { textAlign: 'center', marginBottom: '30px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' },
		contenedorTarjetas: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
		tarjeta: { flex: '1', minWidth: '250px', maxWidth: '320px', padding: '15px', borderRadius: '10px', border: '1px solid #ccc' },
		imagen: { width: '180px', height: '140px', objectFit: 'cover', borderRadius: '8px' }
	};

	return (
		<section style={estilos.seccion}>

			{/* QUIÉNES SOMOS */}
			<div style={estilos.intro}>
				<h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>Quiénes Somos 🤝</h2>
				<p style={{ lineHeight: '1.5', color: '#34495e', margin: '0 auto', textAlign: 'left' }}>
					Nuestra organización empezó con una sola persona y muchas ganas de ayudar a los animales. Al principio todo lo hacíamos a pulso desde una casa. Con el tiempo, los vecinos se dieron cuenta de lo que hacíamos y se empezó a correr la voz. Hoy somos un grupo de voluntarios unidos por la misma causa, demostrando que si nos organizamos podemos lograr grandes cambios.
				</p>
			</div>

			<hr style={{ border: '0', borderTop: '1px solid #eaeded', marginBottom: '30px' }} />

			{/* CASO DE INSPIRACIÓN */}
			<div style={{ textAlign: 'center', marginBottom: '20px' }}>
				<h3 style={{ color: '#2c3e50', margin: '0 0 5px 0' }}>Nuestra Gran Inspiración 🐾</h3>
				<p style={{ color: '#7f8c8d', margin: 0, fontSize: '0.95rem' }}>
					El caso real que nos motivó a armar todo este proyecto.
				</p>
			</div>

			{/* ANTES Y DESPUÉS */}
			<div style={estilos.contenedorTarjetas}>

				{/* Tarjeta: El Antes */}
				<div style={{ ...estilos.tarjeta, backgroundColor: '#fdf2e9', borderColor: '#ffeacc' }}>
					<div style={{ textAlign: 'center', marginBottom: '10px' }}>
						<img src="/antes.png" alt="Antes del rescate" style={estilos.imagen} />
					</div>
					<h4 style={{ color: '#d35400', margin: '0 0 10px 0', textAlign: 'center' }}>El Antes 💔</h4>
					<p style={{ lineHeight: '1.4', color: '#566573', fontSize: '0.9rem', textAlign: 'left', margin: 0 }}>
						Lo rescatamos de un lugar en muy malas condiciones, donde vivía con otros gatitos totalmente descuidados y sin comida. El espacio era muy chico y no podían estar bien ahí.
					</p>
				</div>

				{/* Tarjeta: El Después */}
				<div style={{ ...estilos.tarjeta, backgroundColor: '#e8f8f5', borderColor: '#d1f7e4' }}>
					<div style={{ textAlign: 'center', marginBottom: '10px' }}>
						<img src="/despues.png" alt="Después del rescate" style={estilos.imagen} />
					</div>
					<h4 style={{ color: '#27ae60', margin: '0 0 10px 0', textAlign: 'center' }}>El Después ❤️</h4>
					<p style={{ lineHeight: '1.4', color: '#2c3e50', fontSize: '0.9rem', textAlign: 'left', margin: 0 }}>
						Hoy en día vive feliz, sano y muy bien cuidado. Su recuperación nos demostró que con esfuerzo y cariño de verdad podemos cambiarle la vida a un animalito callejero.
					</p>
				</div>

			</div>

			{/* FRASE DE CIERRE */}
			<div style={{ marginTop: '30px', textAlign: 'center' }}>
				<p style={{ fontStyle: 'italic', color: '#95a5a6', margin: 0 }}>
					"Empezamos siendo uno solo, hoy somos una comunidad que protege."
				</p>
			</div>

		</section>
	);
}

export default Acerca;