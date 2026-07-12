// src/components/Inicio.jsx
import { useEffect, useState } from 'react';

export default function Inicio() {
	const [mantenimiento, setMantenimiento] = useState(0);
	const [recaudacion, setRecaudacion] = useState(0);
	const [rescate, setRescate] = useState(0);

	useEffect(() => {
		// Leer los datos guardados
		const listaVoluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];

		// Contadores normales comenzando en cero
		let cantMantenimiento = 0;
		let cantRecaudacion = 0;
		let cantRescate = 0;

		// Un bucle forEach simple para contar, sin funciones raras
		listaVoluntarios.forEach((voluntario) => {
			if (voluntario.area === "Mantenimiento y Cuidado") {
				cantMantenimiento++;
			} else if (voluntario.area === "Recaudación de Fondos") {
				cantRecaudacion++;
			} else if (voluntario.area === "Rescate en Terreno") {
				cantRescate++;
			}
		});

		// Guardamos los totales en los estados individuales
		setMantenimiento(cantMantenimiento);
		setRecaudacion(cantRecaudacion);
		setRescate(cantRescate);
	}, []);

	// Estilo común para las tarjetas
	const tarjetaEstilo = {
		flex: '1',
		minWidth: '260px',
		maxWidth: '300px',
		padding: '20px',
		borderRadius: '12px',
		textAlign: 'center',
		border: '1px solid #ddd'
	};

	return (
		<section style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>

			{/* Banner principal */}
			<div style={{
				backgroundColor: '#2c3e50',
				color: 'white',
				padding: '30px',
				borderRadius: '15px',
				textAlign: 'center',
				marginBottom: '30px'
			}}>
				<h2 style={{ margin: '0 0 10px 0' }}>🐾 Refugio Huellita Piquipin</h2>
				<p style={{ margin: 0, lineHeight: '1.5' }}>
					¡Bienvenidos! Gracias al apoyo de la comunidad seguimos salvando vidas. Revisa nuestras áreas en tiempo real y descubre dónde hace más falta tu patita hoy.
				</p>
			</div>

			<div style={{ textAlign: 'center', marginBottom: '30px' }}>
				<h3 style={{ color: '#2c3e50', margin: '0 0 5px 0' }}>¿Dónde nos falta gente? 🧐</h3>
				<p style={{ color: '#7f8c8d', margin: 0 }}>¡Postula en el área que veas con menos apoyo para equilibrar la ayuda!</p>
			</div>

			{/* Contenedor de las tres áreas */}
			<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>

				{/* Área 1 */}
				<div style={{ ...tarjetaEstilo, backgroundColor: '#fffaf0' }}>
					<div style={{ fontSize: '2rem' }}>🐱🧹</div>
					<h4 style={{ color: '#d35400', margin: '10px 0' }}>Mantenimiento y Cuidado</h4>
					<h2 style={{ margin: '10px 0', fontSize: '2.5rem', color: '#333' }}>{mantenimiento}</h2>
					<p style={{ color: '#7f8c8d', fontSize: '0.8rem' }}>POSTULANTES ACTIVOS</p>
					<hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '15px 0' }} />
					<p style={{ fontSize: '0.9rem', color: '#555', textAlign: 'left' }}>
						Consiste en la labor interna en el refugio garantizando los cuidados básicos: alimentación, agua fresca, limpieza profunda de las cajas de arena de los gatos y revisión diaria de su estado de salud.
					</p>
				</div>

				{/* Área 2 */}
				<div style={{ ...tarjetaEstilo, backgroundColor: '#f4faff' }}>
					<div style={{ fontSize: '2rem' }}>🐷💰</div>
					<h4 style={{ color: '#2980b9', margin: '10px 0' }}>Recaudación de Fondos</h4>
					<h2 style={{ margin: '10px 0', fontSize: '2.5rem', color: '#333' }}>{recaudacion}</h2>
					<p style={{ color: '#7f8c8d', fontSize: '0.8rem' }}>POSTULANTES ACTIVOS</p>
					<hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '15px 0' }} />
					<p style={{ fontSize: '0.9rem', color: '#555', textAlign: 'left' }}>
						Tu rol consistirá en salir voluntariamente junto a un equipo a espacios públicos a recolectar donativos, educando a las personas sobre la misión de la fundación de forma transparente.
					</p>
				</div>

				{/* Área 3 */}
				<div style={{ ...tarjetaEstilo, backgroundColor: '#f5fcf9' }}>
					<div style={{ fontSize: '2rem' }}>🐾🚑</div>
					<h4 style={{ color: '#27ae60', margin: '10px 0' }}>Rescate en Terreno</h4>
					<h2 style={{ margin: '10px 0', fontSize: '2.5rem', color: '#333' }}>{rescate}</h2>
					<p style={{ color: '#7f8c8d', fontSize: '0.8rem' }}>POSTULANTES ACTIVOS</p>
					<hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '15px 0' }} />
					<p style={{ fontSize: '0.9rem', color: '#555', textAlign: 'left' }}>
						Corresponde a la acción directa de primera línea. El equipo evalúa los reportes de abandono recolectados para clasificar los casos e iniciar el proceso de recuperación en el refugio.
					</p>
				</div>

			</div>

		</section>
	);
}