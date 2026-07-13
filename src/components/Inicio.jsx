import { useEffect, useState } from 'react';

function Inicio() {
	const [contadores, setContadores] = useState({ mantenimiento: 0, recaudacion: 0, rescate: 0 });

	useEffect(() => {
		// Leer los datos del Local Storage
		const listaVoluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];

		// Función para evitar problemas con mayúsculas y tildes
		const normalizar = (texto) => {
			if (!texto) return '';
			return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
		};

		// Contar voluntarios por área
		const conteo = listaVoluntarios.reduce((acc, voluntario) => {
			const areaFormateada = normalizar(voluntario.area);

			if (areaFormateada.includes('mantenimiento') || areaFormateada.includes('cuidado')) {
				acc.mantenimiento++;
			} else if (areaFormateada.includes('recaudacion') || areaFormateada.includes('fondos')) {
				acc.recaudacion++;
			} else if (areaFormateada.includes('rescate') || areaFormateada.includes('terreno')) {
				acc.rescate++;
			}
			return acc;
		}, { mantenimiento: 0, recaudacion: 0, rescate: 0 });

		setContadores(conteo);
	}, []);

	// Estilos básicos en objetos para limpiar las etiquetas de abajo
	const estilos = {
		seccion: { padding: '30px 20px', maxWidth: '950px', margin: '0 auto', fontFamily: 'sans-serif' },
		hero: { background: '#d76eab', color: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', marginBottom: '30px' },
		contenedorTarjetas: { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' },
		tarjeta: { flex: '1', minWidth: '250px', maxWidth: '300px', padding: '20px', borderRadius: '15px', textAlign: 'center', border: '1px solid #ccc' }
	};

	return (
		<section style={estilos.seccion}>

			{/* texto bajo */}
			<div style={estilos.hero}>
				<h2 style={{ margin: '0 0 10px 0' }}>Refugio Gatuno</h2>
				<p style={{ margin: 0 }}>
					¡Bienvenidos! Gracias al apoyo de la comunidad seguimos salvando vidas. Revisa dónde hace más falta tu ayuda hoy.
				</p>
			</div>

			<div style={{ textAlign: 'center', marginBottom: '30px' }}>
				<h3 style={{ color: '#d76eab', margin: '0 0 5px 0' }}>¿No sabes en que área puedes apoyar?</h3>
				<h5 style={{ color: '#776e73', margin: '0 0 5px 0' }}>Nuestro contador en vivo podría darte una mano</h5>
				<p style={{ color: '#7f8c8d', margin: 0 }}>Se voluntario en el área con menos apoyo para ayudarnos a equilibrar nuestra labor</p>
			</div>

			{/* contador de postulantes */}
			<div style={estilos.contenedorTarjetas}>

				{/* contador1: Mantenimiento y Cuidado */}
				<div style={{ ...estilos.tarjeta, backgroundColor: '#fffaf0', borderColor: '#ffeacc' }}>
					<div style={{ fontSize: '2rem' }}>🐱</div>
					<h4 style={{ color: '#d35400', margin: '10px 0' }}>Mantenimiento y Cuidado</h4>
					<span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50' }}>{contadores.mantenimiento}</span>
					<p style={{ color: '#8a95a5', fontSize: '0.8rem', margin: '5px 0 15px 0' }}>POSTULANTES ACTIVOS</p>
					<hr style={{ border: '0', borderTop: '1px solid #ffeacc' }} />
					<p style={{ fontSize: '0.9rem', color: '#566573', textAlign: 'left', lineHeight: '1.4' }}>
						Consiste en la labor interna en el refugio garantizando los cuidados básicos: alimentación, agua fresca, limpieza de jaulas y revisión de salud. También coordina tratamientos médicos sencillos.
					</p>
				</div>

				{/* contador2: Recaudación de Fondos */}
				<div style={{ ...estilos.tarjeta, backgroundColor: '#f4faff', borderColor: '#d4ecfc' }}>
					<div style={{ fontSize: '2rem' }}>💰</div>
					<h4 style={{ color: '#2980b9', margin: '10px 0' }}>Recaudación de Fondos</h4>
					<span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50' }}>{contadores.recaudacion}</span>
					<p style={{ color: '#8a95a5', fontSize: '0.8rem', margin: '5px 0 15px 0' }}>POSTULANTES ACTIVOS</p>
					<hr style={{ border: '0', borderTop: '1px solid #d4ecfc' }} />
					<p style={{ fontSize: '0.9rem', color: '#566573', textAlign: 'left', lineHeight: '1.4' }}>
						Tu rol consistirá en apoyar en la recolección de donaciones en espacios públicos y eventos, difundir las campañas de la fundación, vender accesorios de mascotas y administrar redes sociales.
					</p>
				</div>

				{/* contador3: Rescate en Terreno */}
				<div style={{ ...estilos.tarjeta, backgroundColor: '#f5fcf9', borderColor: '#d1f7e4' }}>
					<div style={{ fontSize: '2rem' }}>🚑</div>
					<h4 style={{ color: '#27ae60', margin: '10px 0' }}>Rescate en Terreno</h4>
					<span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50' }}>{contadores.rescate}</span>
					<p style={{ color: '#8a95a5', fontSize: '0.8rem', margin: '5px 0 15px 0' }}>POSTULANTES ACTIVOS</p>
					<hr style={{ border: '0', borderTop: '1px solid #d1f7e4' }} />
					<p style={{ fontSize: '0.9rem', color: '#566573', textAlign: 'left', lineHeight: '1.4' }}>
						Acción directa en primera línea. El equipo revisa los reportes de abandono de los ciudadanos para evaluar los casos críticos, salir a terreno a buscar a los animales y trasladarlos de forma segura.
					</p>
				</div>

			</div>
		</section>
	);
}

export default Inicio;