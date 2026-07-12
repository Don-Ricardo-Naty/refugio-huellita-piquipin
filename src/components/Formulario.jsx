// src/components/Formulario.jsx
import { useState, useEffect } from 'react';

export default function Formulario() {
	// Datos de registro
	const [nombre, setNombre] = useState('');
	const [alias, setAlias] = useState('');
	const [edad, setEdad] = useState('');
	const [correo, setCorreo] = useState('');
	const [telefono, setTelefono] = useState('');
	const [area, setArea] = useState('');
	const [idGenerado, setIdGenerado] = useState('');
	const [mensaje, setMensaje] = useState('');

	// Datos para cambiar teléfono
	const [idModificar, setIdModificar] = useState('');
	const [nuevoTelefono, setNuevoTelefono] = useState('');
	const [mensajeModificar, setMensajeModificar] = useState('');

	// Datos para eliminar voluntario
	const [idBaja, setIdBaja] = useState('');
	const [mensajeBaja, setMensajeBaja] = useState('');

	// Lista general de voluntarios
	const [voluntarios, setVoluntarios] = useState([]);

	// Cargar los voluntarios guardados en el navegador
	useEffect(() => {
		const registros = JSON.parse(localStorage.getItem('voluntarios')) || [];
		setVoluntarios(registros);
	}, []);

	// 1. Guardar nuevo voluntario (CREATE)
	function registrarVoluntario(e) {
		e.preventDefault();
		setMensaje('');
		setIdGenerado('');

		// Validamos que no haya campos vacios
		if (!nombre || !alias || !edad || !correo || !telefono || !area) {
			setMensaje('Debes rellenar todos los campos obligatorios.');
			return;
		}

		// Validación simple de edad
		if (Number(edad) < 18) {
			setMensaje('Tienes que ser mayor de edad para postular.');
			return;
		}

		// Validación super simple de correo
		if (!correo.includes('@')) {
			setMensaje('El correo no es válido.');
			return;
		}

		// Validación de teléfono usando un largo simple (ej: mínimo 9 números)
		if (telefono.length < 9) {
			setMensaje('El número de teléfono debe tener al menos 9 dígitos.');
			return;
		}

		// Generar un ID aleatorio fácil de 6 dígitos
		const nuevoId = Math.floor(100000 + Math.random() * 900000).toString();

		const nuevoVoluntario = {
			id: nuevoId,
			nombre: nombre,
			alias: alias,
			edad: Number(edad),
			correo: correo,
			telefono: telefono,
			area: area
		};

		// Guardamos en LocalStorage
		const listaActualizada = [...voluntarios, nuevoVoluntario];
		localStorage.setItem('voluntarios', JSON.stringify(listaActualizada));

		// Actualizamos pantalla y limpiamos el formulario
		setVoluntarios(listaActualizada);
		setMensaje('¡Te has registrado con éxito!');
		setIdGenerado(nuevoId);

		setNombre('');
		setAlias('');
		setEdad('');
		setCorreo('');
		setTelefono('');
		setArea('');
	}

	// 2. Modificar un teléfono (UPDATE)
	function modificarTelefono(e) {
		e.preventDefault();
		setMensajeModificar('');

		if (!idModificar || !nuevoTelefono) {
			setMensajeModificar('Rellena el ID y el nuevo teléfono.');
			return;
		}

		if (nuevoTelefono.length < 9) {
			setMensajeModificar('El teléfono debe tener mínimo 9 dígitos.');
			return;
		}

		const existe = voluntarios.some(v => v.id === idModificar);
		if (!existe) {
			setMensajeModificar('No encontramos ningún voluntario con ese ID.');
			return;
		}

		// Recorremos y cambiamos el teléfono del que coincida
		const listaActualizada = voluntarios.map(v => {
			if (v.id === idModificar) {
				return { ...v, telefono: nuevoTelefono };
			}
			return v;
		});

		localStorage.setItem('voluntarios', JSON.stringify(listaActualizada));
		setVoluntarios(listaActualizada);
		setMensajeModificar('Teléfono actualizado correctamente.');
		setIdModificar('');
		setNuevoTelefono('');
	}

	// 3. Eliminar voluntario (DELETE)
	function darDeBaja(e) {
		e.preventDefault();
		setMensajeBaja('');

		if (!idBaja) {
			setMensajeBaja('Por favor ingresa un ID.');
			return;
		}

		const existe = voluntarios.some(v => v.id === idBaja);
		if (!existe) {
			setMensajeBaja('El ID no coincide con ningún registro.');
			return;
		}

		// Filtramos para eliminarlo de la lista
		const listaFiltrada = voluntarios.filter(v => v.id !== idBaja);
		localStorage.setItem('voluntarios', JSON.stringify(listaFiltrada));

		setVoluntarios(listaFiltrada);
		setMensajeBaja('Has sido retirado del sistema.');
		setIdBaja('');
	}

	// Colores simples según el área asignada
	function obtenerColorArea(areaAsignada) {
		if (areaAsignada === "Mantenimiento y Cuidado") return '#ffb6c1';
		if (areaAsignada === "Recaudación de Fondos") return '#f1c40f';
		if (areaAsignada === "Rescate en Terreno") return '#3498db';
		return '#7f8c8d';
	}

	// Estilos reutilizables para no amontonar el HTML
	const inputEstilo = {
		width: '100%',
		padding: '8px',
		margin: '5px 0 12px 0',
		borderRadius: '5px',
		border: '1px solid #ccc',
		boxSizing: 'border-box'
	};

	const cajaEstilo = {
		padding: '15px',
		borderRadius: '8px',
		marginBottom: '20px',
		backgroundColor: '#f8f9fa',
		border: '1px solid #ddd'
	};

	return (
		<section style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
			<div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>

				{/* Columna de Formularios */}
				<div style={{ flex: '1', minWidth: '320px' }}>

					{/* Registro */}
					<div style={{ marginBottom: '30px' }}>
						<h2 style={{ color: '#2c3e50' }}>Únete como Voluntario ❤️</h2>

						{mensaje && (
							<p style={{ padding: '10px', backgroundColor: '#e2f0d9', color: '#385723', borderRadius: '5px' }}>
								{mensaje}
							</p>
						)}

						{idGenerado && (
							<div style={{ padding: '15px', backgroundColor: '#fff3cd', color: '#856404', borderRadius: '6px', marginBottom: '15px' }}>
								<p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ IMPORTANTE: COPIA TU ID DE VOLUNTARIO</p>
								<h3 style={{ margin: '10px 0', fontSize: '1.8rem', textAlign: 'center' }}>{idGenerado}</h3>
								<p style={{ margin: 0, fontSize: '0.8rem' }}>Lo vas a necesitar para modificar tu teléfono o salir del sistema.</p>
							</div>
						)}

						<form onSubmit={registrarVoluntario}>
							<label>Nombre Completo:</label>
							<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} style={inputEstilo} placeholder="Ej: Ana Gómez" />

							<label>Alias (Se mostrará en la lista):</label>
							<input type="text" value={alias} onChange={(e) => setAlias(e.target.value)} style={inputEstilo} placeholder="Ej: Anita_Rescates" />

							<label>Edad:</label>
							<input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} style={inputEstilo} placeholder="Ej: 25" />

							<label>Correo Electrónico:</label>
							<input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} style={inputEstilo} placeholder="Ej: ana@correo.com" />

							<label>Teléfono:</label>
							<input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} style={inputEstilo} placeholder="Ej: 987654321" />

							<label>Área de Interés:</label>
							<select value={area} onChange={(e) => setArea(e.target.value)} style={inputEstilo}>
								<option value="">-- Selecciona un área --</option>
								<option value="Mantenimiento y Cuidado">Mantenimiento y Cuidado</option>
								<option value="Recaudación de Fondos">Recaudación de Fondos</option>
								<option value="Rescate en Terreno">Rescate en Terreno</option>
							</select>

							<button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
								Enviar Postulación
							</button>
						</form>
					</div>

					{/* Modificar Teléfono */}
					<div style={{ ...cajaEstilo, backgroundColor: '#ebf5fb', borderColor: '#aec6cf' }}>
						<h3 style={{ color: '#2980b9', margin: '0 0 10px 0' }}>📞 Actualizar Teléfono</h3>

						{mensajeModificar && <p style={{ color: '#2980b9', fontWeight: 'bold' }}>{mensajeModificar}</p>}

						<form onSubmit={modificarTelefono}>
							<input type="text" value={idModificar} onChange={(e) => setIdModificar(e.target.value)} style={inputEstilo} placeholder="ID de voluntario" maxLength="6" />
							<input type="text" value={nuevoTelefono} onChange={(e) => setNuevoTelefono(e.target.value)} style={inputEstilo} placeholder="Nuevo Teléfono" />
							<button type="submit" style={{ width: '100%', padding: '8px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
								Guardar Teléfono Nuevo
							</button>
						</form>
					</div>

					{/* Cancelar Registro */}
					<div style={{ ...cajaEstilo, backgroundColor: '#fdf2f2', borderColor: '#f5c6cb' }}>
						<h3 style={{ color: '#c0392b', margin: '0 0 10px 0' }}>❌ Cancelar Registro</h3>

						{mensajeBaja && <p style={{ color: '#c0392b', fontWeight: 'bold' }}>{mensajeBaja}</p>}

						<form onSubmit={darDeBaja}>
							<input type="text" value={idBaja} onChange={(e) => setIdBaja(e.target.value)} style={inputEstilo} placeholder="ID de voluntario" maxLength="6" />
							<button type="submit" style={{ width: '100%', padding: '8px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
								Salir del Voluntariado
							</button>
						</form>
					</div>

				</div>

				{/* Columna de Visualización Pública */}
				<div style={{ flex: '1', minWidth: '280px', backgroundColor: '#fafafa', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
					<h3 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>👥 Voluntarios Registrados</h3>
					<p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginBottom: '15px' }}>Lista pública oficial del refugio.</p>

					{voluntarios.length === 0 ? (
						<p style={{ color: '#999', fontStyle: 'italic', textAlign: 'center' }}>No hay postulantes registrados.</p>
					) : (
						<div style={{ display: 'grid', gap: '10px' }}>
							{voluntarios.map((v) => (
								<div key={v.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '5px', borderLeft: `5px solid ${obtenerColorArea(v.area)}` }}>
									<strong style={{ color: '#333' }}>👤 {v.alias}</strong>
									<span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '10px', backgroundColor: obtenerColorArea(v.area), fontWeight: 'bold' }}>
										{v.area}
									</span>
								</div>
							))}
						</div>
					)}
				</div>

			</div>
		</section>
	);
}