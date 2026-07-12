import { useEffect, useState } from 'react';

function Inicio() {
	const [contadores, setContadores] = useState({ mantenimiento: 0, recaudacion: 0, rescate: 0 });

	useEffect(() => {
		// 1. Leer los datos del Local Storage al cargar la página de Inicio
		const listaVoluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];

		// Función auxiliar para evitar errores por tildes o mayúsculas en el formulario
		const normalizar = (texto) => {
			if (!texto) return '';
			return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
		};

		// 2. Proceso / Cálculo matemático optimizado
		const conteo = listaVoluntarios.reduce((acc, voluntario) => {
			const areaFormateada = normalizar(voluntario.area);

			if (areaFormateada.includes('mantenimiento') || areaFormateada.includes('cuidado')) {
				acc.mantenimiento++;
			} else if (areaFormateada.includes('recaudacion') || areaFormateada.includes('fondos')) {
				acc.recaudacion++;
			} else if (areaFormateada.includes('rescate') || areaFormateada.includes('terreno') || areaFormateada.includes('rescatista')) {
				acc.rescate++;
			}
			return acc;
		}, { mantenimiento: 0, recaudacion: 0, rescate: 0 });

		// 3. Actualizar el estado con los resultados reales
		setContadores(conteo);
	}, []);

	return (
		<section style={{
			padding: '40px 20px',
			maxWidth: '1000px',
			margin: '0 auto',
			fontFamily: '"Quicksand", "Nunito", "Arial", sans-serif'
		}}>

			{/* HERO BANNER */}
			<div style={{
				background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)',
				color: 'white',
				padding: '40px 30px',
				borderRadius: '24px',
				textAlign: 'center',
				boxShadow: '0 8px 24px rgba(44, 62, 80, 0.12)',
				marginBottom: '40px'
			}}>
				<h2 style={{ margin: '0 0 12px 0', fontSize: '2.2rem', letterSpacing: '-0.5px' }}>🐾 Refugio Huellita Piquipin</h2>
				<p style={{ fontSize: '1.05rem', color: '#eaeded', margin: '0 auto', maxWidth: '600px', lineHeight: '1.6' }}>
					¡Bienvenidos! Gracias al apoyo de la comunidad seguimos salvando vidas. Revisa nuestras áreas en tiempo real y descubre dónde hace más falta tu patita hoy.
				</p>
			</div>

			<div style={{ textAlign: 'center', marginBottom: '35px' }}>
				<h3 style={{ color: '#2c3e50', margin: '0 0 6px 0', fontSize: '1.4rem' }}>¿Dónde nos falta gente? 🧐</h3>
				<p style={{ color: '#7f8c8d', fontSize: '0.95rem', margin: 0 }}>¡Postula en el área que veas con menos apoyo para equilibrar la ayuda!</p>
			</div>

			{/* CONTENEDOR DE TARJETAS CON CONTADOR + DESCRIPCIÓN DETALLADA */}
			<div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>

				{/* Tarjeta: Mantenimiento y Cuidado */}
				<div style={{
					flex: '1', minWidth: '280px', maxWidth: '310px', backgroundColor: '#fffaf0',
					padding: '25px 20px', borderRadius: '22px', textAlign: 'center',
					boxShadow: '0 6px 18px rgba(230, 126, 34, 0.05)', border: '2px solid #ffeacc',
					display: 'flex', flexDirection: 'column'
				}}>
					<div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>🐱🧹</div>
					<h4 style={{ color: '#d35400', fontSize: '1.1rem', margin: '0 0 5px 0', fontWeight: '600' }}>Mantenimiento y Cuidado</h4>

					<span style={{ display: 'block', fontSize: '2.2rem', fontWeight: '800', color: '#2c3e50', margin: '5px 0' }}>
						{contadores.mantenimiento}
					</span>
					<p style={{ margin: '0 0 15px 0', color: '#8a95a5', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase' }}>Postulantes activos</p>

					<hr style={{ border: 0, height: '1px', backgroundColor: '#ffeacc', margin: '10px 0' }} />

					<p style={{ fontSize: '0.9rem', color: '#566573', lineHeight: '1.5', textAlign: 'justify', margin: '10px 0 0 0' }}>
						Consiste en la labor interna en el refugio garantizando los cuidados básicos: alimentación, agua fresca, limpieza profunda de las cajas de arena de los gatos y revisión diaria de su estado de salud. Además, se encarga de coordinar las visitas veterinarias, administrar tratamientos médicos y gestionar casos especiales que requieran atención aislada o prioritaria.
					</p>
				</div>

				{/* Tarjeta: Recaudación de Fondos */}
				<div style={{
					flex: '1', minWidth: '280px', maxWidth: '310px', backgroundColor: '#f4faff',
					padding: '25px 20px', borderRadius: '22px', textAlign: 'center',
					boxShadow: '0 6px 18px rgba(52, 152, 219, 0.05)', border: '2px solid #d4ecfc',
					display: 'flex', flexDirection: 'column'
				}}>
					<div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>🐷💰</div>
					<h4 style={{ color: '#2980b9', fontSize: '1.1rem', margin: '0 0 5px 0', fontWeight: '600' }}>Recaudación de Fondos</h4>

					<span style={{ display: 'block', fontSize: '2.2rem', fontWeight: '800', color: '#2c3e50', margin: '5px 0' }}>
						{contadores.recaudacion}
					</span>
					<p style={{ margin: '0 0 15px 0', color: '#8a95a5', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase' }}>Postulantes activos</p>

					<hr style={{ border: 0, height: '1px', backgroundColor: '#d4ecfc', margin: '10px 0' }} />

					<p style={{ fontSize: '0.9rem', color: '#566573', lineHeight: '1.5', textAlign: 'justify', margin: '10px 0 0 0' }}>
						Tu rol consistirá en salir voluntariamente junto a un equipo a espacios públicos a recolectar donativos, educando a las personas sobre la misión de la fundación de forma transparente y legítima. También abarca la venta presencial de accesorios para mascotas, el apoyo en marketing digital, redes sociales y la recepción de folletos con sugerencias de ayuda cuando un ciudadano reporte un animal en abandono.
					</p>
				</div>

				{/* Tarjeta: Rescate en Terreno */}
				<div style={{
					flex: '1', minWidth: '280px', maxWidth: '310px', backgroundColor: '#f5fcf9',
					padding: '25px 20px', borderRadius: '22px', textAlign: 'center',
					boxShadow: '0 6px 18px rgba(46, 204, 113, 0.05)', border: '2px solid #d1f7e4',
					display: 'flex', flexDirection: 'column'
				}}>
					<div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>🐾🚑</div>
					<h4 style={{ color: '#27ae60', fontSize: '1.1rem', margin: '0 0 5px 0', fontWeight: '600' }}>Rescate en Terreno</h4>

					<span style={{ display: 'block', fontSize: '2.2rem', fontWeight: '800', color: '#2c3e50', margin: '5px 0' }}>
						{contadores.rescate}
					</span>
					<p style={{ margin: '0 0 15px 0', color: '#8a95a5', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase' }}>Postulantes activos</p>

					<hr style={{ border: 0, height: '1px', backgroundColor: '#d1f7e4', margin: '10px 0' }} />

					<p style={{ fontSize: '0.9rem', color: '#566573', lineHeight: '1.5', textAlign: 'justify', margin: '10px 0 0 0' }}>
						Corresponde a la acción directa de primera línea. El equipo evalúa los folletos y reportes de abandono recolectados para clasificar los casos en base a su viabilidad, nivel de riesgo y confiabilidad. Una vez validados, salen a terreno a buscar, asegurar y trasladar a los animales en situación crítica hacia el refugio para iniciar de forma inmediata su respectivo proceso de recuperación.
					</p>
				</div>

			</div>

		</section>
	);
}

export default Inicio;