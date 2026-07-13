// src/components/Formulario.jsx
import { useState, useEffect } from 'react';

function Formulario() {
	// --- Estados para el REGISTRO ---
	const [nombre, setNombre] = useState('');
	const [alias, setAlias] = useState('');
	const [edad, setEdad] = useState('');
	const [correo, setCorreo] = useState('');
	const [telefono, setTelefono] = useState('');
	const [area, setArea] = useState('');
	const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });
	const [idGenerado, setIdGenerado] = useState('');

	// --- Estados para la MODIFICACIÓN EXCLUSIVA DEL TELÉFONO ---
	const [idModificar, setIdModificar] = useState('');
	const [nuevoTelefono, setNuevoTelefono] = useState('');
	const [mensajeModificar, setMensajeModificar] = useState({ texto: '', tipo: '' });

	// --- Estados para la BAJA (ELIMINAR) ---
	const [idBaja, setIdBaja] = useState('');
	const [mensajeBaja, setMensajeBaja] = useState({ texto: '', tipo: '' });

	// --- Estado para MOSTRAR la lista pública ---
	const [voluntarios, setVoluntarios] = useState([]);

	// Cargar lista desde Local Storage al montar el componente
	useEffect(() => {
		const registros = JSON.parse(localStorage.getItem('voluntarios')) || [];
		setVoluntarios(registros);
	}, []);

	// 1. FUNCIÓN: REGISTRAR NUEVO VOLUNTARIO (CREATE)
	const registrarVoluntario = (e) => {
		e.preventDefault();
		setMensaje({ texto: '', tipo: '' });
		setIdGenerado('');

		if (!nombre.trim() || !alias.trim() || !edad || !correo.trim() || !telefono.trim() || !area) {
			setMensaje({ texto: 'Por favor, rellena todos los campos del formulario.', tipo: 'error' });
			return;
		}

		if (parseInt(edad) < 18 || parseInt(edad) > 90) {
			setMensaje({ texto: 'Debes ser mayor de edad (18 años o más).', tipo: 'error' });
			return;
		}

		if (!correo.includes('@') || !correo.includes('.')) {
			setMensaje({ texto: 'Por favor, ingresa un correo válido.', tipo: 'error' });
			return;
		}

		const formatoTelefono = /^[0-9]{9}$/;
		if (!formatoTelefono.test(telefono)) {
			setMensaje({ texto: 'El teléfono debe tener exactamente 9 dígitos.', tipo: 'error' });
			return;
		}

		const nuevoId = Math.floor(100000 + Math.random() * 900000).toString();
		const registrosActuales = JSON.parse(localStorage.getItem('voluntarios')) || [];

		const nuevoVoluntario = {
			id: nuevoId,
			nombre: nombre.trim(),
			alias: alias.trim(),
			edad: parseInt(edad),
			correo: correo.trim(),
			telefono: telefono.trim(),
			area: area
		};

		registrosActuales.push(nuevoVoluntario);
		localStorage.setItem('voluntarios', JSON.stringify(registrosActuales));

		setVoluntarios(registrosActuales);
		setMensaje({ texto: '¡Inscripción procesada con éxito!', tipo: 'exito' });
		setIdGenerado(nuevoId);

		// Limpiar campos
		setNombre(''); setAlias(''); setEdad(''); setCorreo(''); setTelefono(''); setArea('');
	};

	// 2. FUNCIÓN: MODIFICAR SÓLO EL TELÉFONO (UPDATE EXCLUSIVO)
	const modificarTelefono = (e) => {
		e.preventDefault();
		setMensajeModificar({ texto: '', tipo: '' });

		if (!idModificar.trim() || !nuevoTelefono.trim()) {
			setMensajeModificar({ texto: 'Por favor, completa el ID y el nuevo teléfono.', tipo: 'error' });
			return;
		}

		const formatoTelefono = /^[0-9]{9}$/;
		if (!formatoTelefono.test(nuevoTelefono)) {
			setMensajeModificar({ texto: 'El nuevo teléfono debe tener exactamente 9 dígitos.', tipo: 'error' });
			return;
		}

		let registrosActuales = JSON.parse(localStorage.getItem('voluntarios')) || [];
		const existe = registrosActuales.some(v => v.id === idModificar.trim());

		if (!existe) {
			setMensajeModificar({ texto: 'El ID ingresado no coincide con ningún voluntario.', tipo: 'error' });
			return;
		}

		// Actualizar únicamente el campo teléfono del voluntario correspondiente
		registrosActuales = registrosActuales.map((v) => {
			if (v.id === idModificar.trim()) {
				return { ...v, telefono: nuevoTelefono.trim() };
			}
			return v;
		});

		localStorage.setItem('voluntarios', JSON.stringify(registrosActuales));
		setVoluntarios(registrosActuales);
		setMensajeModificar({ texto: '¡Teléfono de contacto actualizado con éxito!', tipo: 'exito' });
		setIdModificar('');
		setNuevoTelefono('');
	};

	// 3. FUNCIÓN: DAR DE BAJA (DELETE)
	const darDeBaja = (e) => {
		e.preventDefault();
		setMensajeBaja({ texto: '', tipo: '' });

		if (!idBaja.trim()) {
			setMensajeBaja({ texto: 'Por favor, ingresa un ID válido.', tipo: 'error' });
			return;
		}

		const registrosActuales = JSON.parse(localStorage.getItem('voluntarios')) || [];
		const existe = registrosActuales.some(v => v.id === idBaja.trim());

		if (!existe) {
			setMensajeBaja({ texto: 'El ID no coincide con ningún voluntario activo.', tipo: 'error' });
			return;
		}

		const registrosFiltrados = registrosActuales.filter(v => v.id !== idBaja.trim());
		localStorage.setItem('voluntarios', JSON.stringify(registrosFiltrados));

		setVoluntarios(registrosFiltrados);
		setMensajeBaja({ texto: 'Retirado del sistema con éxito.', tipo: 'exito' });
		setIdBaja('');
	};

	// 4. FUNCIÓN AUXILIAR PARA LOS COLORES
	const obtenerColorArea = (areaAsignada) => {
		switch (areaAsignada) {
			case "Mantenimiento y Cuidado": return '#ffb6c1'; // Rosado
			case "Recaudación de Fondos": return '#f1c40f';  // Amarillo
			case "Rescate en Terreno": return '#3498db';     // Azul
			default: return '#7f8c8d';
		}
	};

	return (
		<section style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>

			<div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>

				{/* COLUMNA IZQUIERDA: FORMULARIOS */}
				<div style={{ flex: '1', minWidth: '350px' }}>

					{/* SECCIÓN REGISTRO */}
					<div style={{ marginBottom: '35px', borderBottom: '2px dashed #ccc', paddingBottom: '35px' }}>
						<h2 style={{ color: '#2c3e50', marginTop: 0 }}>Únete como Voluntario ❤️</h2>

						{mensaje.texto && (
							<div style={{
								padding: '12px', marginBottom: '20px', borderRadius: '6px',
								backgroundColor: mensaje.tipo === 'error' ? '#f8d7da' : '#d4edda',
								color: mensaje.tipo === 'error' ? '#721c24' : '#155724',
								border: `1px solid ${mensaje.tipo === 'error' ? '#f5c6cb' : '#c3e6cb'}`, fontWeight: 'bold'
							}}>
								{mensaje.texto}
							</div>
						)}

						{idGenerado && (
							<div style={{ padding: '15px', backgroundColor: '#fff3cd', border: '1px solid #ffeeba', color: '#856404', borderRadius: '6px', marginBottom: '20px', textAlign: 'center' }}>
								<p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>⚠️ ¡COPIA TU ID DE VOLUNTARIO! ⚠️</p>
								<span style={{ fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '2px' }}>{idGenerado}</span>
								<p style={{ margin: '5px 0 0 0', fontSize: '0.85rem' }}>Guárdalo en un lugar seguro. Lo necesitarás de forma obligatoria para cambiar tu teléfono o darte de baja, ya que no volverá a mostrarse por seguridad.</p>
							</div>
						)}

						<form onSubmit={registrarVoluntario} style={{ display: 'grid', gap: '15px' }}>
							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre Completo (Privado):</label>
								<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ej: Ana Gómez" />
							</div>

							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Alias / Nickname (Público):</label>
								<input type="text" value={alias} onChange={(e) => setAlias(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ej: Anita_Rescates" />
							</div>

							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Edad:</label>
								<input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ej: 25" />
							</div>

							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Correo Electrónico:</label>
								<input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ej: ana@correo.com" />
							</div>

							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Teléfono (9 dígitos):</label>
								<input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ej: 987654321" maxLength="9" />
							</div>

							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Selecciona el Área:</label>
								<select value={area} onChange={(e) => setArea(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: 'white' }}>
									<option value="">-- Elige un área --</option>
									<option value="Mantenimiento y Cuidado">1. Mantenimiento y Cuidado</option>
									<option value="Recaudación de Fondos">2. Recaudación de Fondos</option>
									<option value="Rescate en Terreno">3. Rescate en Terreno</option>
								</select>
							</div>

							<button type="submit" style={{ padding: '12px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
								Enviar Postulación
							</button>
						</form>
					</div>

					{/* ESPACIO APARTE: MODIFICAR EXCLUSIVAMENTE NÚMERO DE CONTACTO */}
					<div style={{ padding: '20px', backgroundColor: '#ebf5fb', borderRadius: '10px', border: '1px solid #aec6cf', marginBottom: '20px' }}>
						<h3 style={{ color: '#2980b9', marginTop: 0 }}>📞 Actualizar Teléfono de Contacto</h3>
						<p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginBottom: '15px' }}>Requiere tu ID privado de 6 dígitos para autorizar el cambio.</p>

						{mensajeModificar.texto && (
							<div style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: mensajeModificar.tipo === 'error' ? '#f8d7da' : '#d4edda', color: mensajeModificar.tipo === 'error' ? '#721c24' : '#155724', fontSize: '0.9rem', fontWeight: 'bold' }}>
								{mensajeModificar.texto}
							</div>
						)}

						<form onSubmit={modificarTelefono} style={{ display: 'grid', gap: '10px' }}>
							<input type="text" value={idModificar} onChange={(e) => setIdModificar(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ingresa tu ID de 6 dígitos" maxLength="6" />
							<input type="text" value={nuevoTelefono} onChange={(e) => setNuevoTelefono(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Nuevo Teléfono (9 dígitos)" maxLength="9" />
							<button type="submit" style={{ padding: '10px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Actualizar Número</button>
						</form>
					</div>

					{/* SECCIÓN BAJA */}
					<div style={{ padding: '20px', backgroundColor: '#fdf2f2', borderRadius: '10px', border: '1px solid #f5c6cb' }}>
						<h3 style={{ color: '#c0392b', marginTop: 0 }}>¿Deseas Salir del Voluntariado? ❌</h3>
						<p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginBottom: '15px' }}>Ingresa tu ID privado de 6 dígitos para darte de baja.</p>

						{mensajeBaja.texto && (
							<div style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: mensajeBaja.tipo === 'error' ? '#f8d7da' : '#d4edda', color: mensajeBaja.tipo === 'error' ? '#721c24' : '#155724', fontSize: '0.9rem', fontWeight: 'bold' }}>
								{mensajeBaja.texto}
							</div>
						)}

						<form onSubmit={darDeBaja} style={{ display: 'flex', gap: '10px' }}>
							<input type="text" value={idBaja} onChange={(e) => setIdBaja(e.target.value)} style={{ flex: '1', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ingresa tu ID de 6 dígitos" maxLength="6" />
							<button type="submit" style={{ padding: '10px 15px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Baja</button>
						</form>
					</div>

				</div>

				{/* COLUMNA DERECHA: LISTA PÚBLICA DE ALIAS (SEGURO: ID OCULTO) */}
				<div style={{ flex: '1', minWidth: '300px', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef', alignSelf: 'flex-start' }}>
					<h3 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '5px' }}>👥 Voluntarios Activos</h3>
					<p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginBottom: '20px' }}>Identidades reales totalmente protegidas. Los identificadores privados no se muestran en esta sección.</p>

					{voluntarios.length === 0 ? (
						<p style={{ color: '#95a5a6', fontStyle: 'italic', textAlign: 'center', marginTop: '30px' }}>No hay voluntarios registrados aún. ¡Sé el primero!</p>
					) : (
						<div style={{ display: 'grid', gap: '12px' }}>
							{voluntarios.map((v) => (
								<div key={v.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '15px', borderRadius: '8px', borderLeft: `6px solid ${obtenerColorArea(v.area)}`, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
									<div>
										{/* El ID se eliminó de aquí por completo por seguridad */}
										<strong style={{ fontSize: '1.1rem', color: '#2c3e50' }}>👤 {v.alias}</strong>
									</div>
									<div>
										<span style={{ padding: '5px 12px', borderRadius: '20px', backgroundColor: obtenerColorArea(v.area), color: v.area === 'Recaudación de Fondos' ? '#333' : 'black', fontSize: '0.75rem', fontWeight: 'bold' }}>
											{v.area}
										</span>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

			</div>
		</section>
	);
}

export default Formulario;