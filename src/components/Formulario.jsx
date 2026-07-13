import { useState, useEffect } from 'react';////////////////////////////////////////////7

function Formulario() {

	const [nombre, setNombre] = useState('');
	const [alias, setAlias] = useState('');
	const [edad, setEdad] = useState('');
	const [correo, setCorreo] = useState('');
	const [telefono, setTelefono] = useState('');
	const [area, setArea] = useState('');


	const [mensajeExito, setMensajeExito] = useState('');
	const [mensajeError, setMensajeError] = useState('');
	const [idGenerado, setIdGenerado] = useState('');


	const [idModificar, setIdModificar] = useState('');
	const [nuevoTelefono, setNuevoTelefono] = useState('');


	const [idBaja, setIdBaja] = useState('');


	const [voluntarios, setVoluntarios] = useState([]);


	useEffect(() => {
		const registros = JSON.parse(localStorage.getItem('voluntarios')) || [];
		setVoluntarios(registros);
	}, []);


	const registrarVoluntario = (e) => {
		e.preventDefault();
		setMensajeError('');
		setMensajeExito('');
		setIdGenerado('');

		//validar campos vacios que obligue a rellenat todos
		if (!nombre || !alias || !edad || !correo || !telefono || !area) {
			setMensajeError('Por favor, rellena todos los campos del formulario.');
			return;
		}

		//validar la edad
		if (Number(edad) < 18) {
			setMensajeError('Debes ser mayor de edad (18 años o más).');
			return;
		}

		//validacion para el arroba por lo menos y el usuario no meta cualquier lesera 
		if (!correo.includes('@')) {
			setMensajeError('Por favor, ingresa un correo valido.');
			return;
		}

		//validar que el telefono tenga una longitud de 9 numeros
		if (telefono.length !== 9) {
			setMensajeError('El teléfono debe tener exactamente 9 números.');
			return;
		}

		//generar un ID ramdom de 6 numeros
		const nuevoId = Math.floor(100000 + Math.random() * 900000).toString();
		const listaActual = JSON.parse(localStorage.getItem('voluntarios')) || [];

		//crear nuevo voluntario
		const nuevoVoluntario = {
			id: nuevoId,
			nombre: nombre,
			alias: alias,
			edad: edad,
			correo: correo,
			telefono: telefono,
			area: area
		};

		//guardar en el array, actualizar LocalStorage y refrescar la lista de la pantalla para que este como "en vivo" 
		listaActual.push(nuevoVoluntario);
		localStorage.setItem('voluntarios', JSON.stringify(listaActual));
		setVoluntarios(listaActual);

		setMensajeExito('¡Inscripción procesada con éxito!');
		setIdGenerado(nuevoId);

		setNombre(''); setAlias(''); setEdad(''); setCorreo(''); setTelefono(''); setArea('');
	};

	//actualizar datos(telefono noma)
	const modificarTelefono = (e) => {
		e.preventDefault();
		setMensajeError('');
		setMensajeExito('');

		if (!idModificar || !nuevoTelefono) {
			setMensajeError('Por favor, completa el ID y el nuevo teléfono.');
			return;
		}

		if (nuevoTelefono.length !== 9) {
			setMensajeError('El nuevo teléfono debe tener exactamente 9 dígitos.');
			return;
		}

		let listaActual = JSON.parse(localStorage.getItem('voluntarios')) || [];

		//busca ID
		const encontrado = listaActual.find(v => v.id === idModificar);
		if (!encontrado) {
			setMensajeError('El ID ingresado no coincide con ningun usuario, intenta otra vez!.');
			return;
		}

		//modificar el telefono 
		const listaModificada = listaActual.map((v) => {
			if (v.id === idModificar) {
				return { ...v, telefono: nuevoTelefono };
			}
			return v;
		});

		localStorage.setItem('voluntarios', JSON.stringify(listaModificada));
		setVoluntarios(listaModificada);
		setMensajeExito('¡Teléfono de contacto actualizado con éxito!');
		setIdModificar('');
		setNuevoTelefono('');
	};

	//dar de baja si se pilla el id o chao nomas si no existe
	const darDeBaja = (e) => {
		e.preventDefault();
		setMensajeError('');
		setMensajeExito('');

		if (!idBaja) {
			setMensajeError('Por favor, ingresa un ID válido.');
			return;
		}

		const listaActual = JSON.parse(localStorage.getItem('voluntarios')) || [];
		const existe = listaActual.find(v => v.id === idBaja);

		if (!existe) {
			setMensajeError('El ID no coincide con ningún voluntario activo.');
			return;
		}

		// Filtrar la lista borrando al voluntario que tenga el ID ingresado
		const listaFiltrada = listaActual.filter(v => v.id !== idBaja);
		localStorage.setItem('voluntarios', JSON.stringify(listaFiltrada));
		setVoluntarios(listaFiltrada);

		setMensajeExito('Retirado del sistema con éxito.');
		setIdBaja('');
	};

	const darColor = (areaActual) => {
		if (areaActual === "Mantenimiento y Cuidado") return '#ffb6c1';
		if (areaActual === "Recaudación de Fondos") return '#f1c40f';
		if (areaActual === "Rescate en Terreno") return '#3498db';
		return '#7f8c8d';
	};

	return (
		<section style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
			<div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>

				{/* Columna de Formularios */}
				<div style={{ flex: '1', minWidth: '350px' }}>

					{/* Caja de Registro */}
					<div style={{ marginBottom: '35px', borderBottom: '2px dashed #ccc', paddingBottom: '35px' }}>
						<h2 style={{ color: '#2c3e50', marginTop: 0 }}>Únete como Voluntario ❤️</h2>

						{mensajeError && (
							<div style={{ padding: '12px', marginBottom: '20px', borderRadius: '6px', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' }}>
								{mensajeError}
							</div>
						)}

						{mensajeExito && (
							<div style={{ padding: '12px', marginBottom: '20px', borderRadius: '6px', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' }}>
								{mensajeExito}
							</div>
						)}

						{idGenerado && (
							<div style={{ padding: '15px', backgroundColor: '#fff3cd', border: '1px solid #ffeeba', color: '#856404', borderRadius: '6px', marginBottom: '20px', textAlign: 'center' }}>
								<p style={{ margin: '0', fontWeight: 'bold' }}>⚠️ ¡COPIA TU ID DE VOLUNTARIO! ⚠️</p>
								<span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{idGenerado}</span>
								<p style={{ margin: '5px 0 0 0', fontSize: '13px' }}>Guárdalo bien. Lo necesitarás de forma obligatoria para cambiar tu teléfono o darte de baja.</p>
							</div>
						)}

						<form onSubmit={registrarVoluntario} style={{ display: 'grid', gap: '15px' }}>
							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre Completo:</label>
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
								<input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ej: 987654321" />
							</div>
							<div>
								<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Selecciona el Área:</label>
								<select value={area} onChange={(e) => setArea(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: 'white' }}>
									<option value="">-- Elige un área --</option>
									<option value="Mantenimiento y Cuidado">Mantenimiento y Cuidado</option>
									<option value="Recaudación de Fondos">Recaudación de Fondos</option>
									<option value="Rescate en Terreno">Rescate en Terreno</option>
								</select>
							</div>
							<button type="submit" style={{ padding: '12px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
								Enviar Postulación
							</button>
						</form>
					</div>

					{/*modificarse con id*/}
					<div style={{ padding: '20px', backgroundColor: '#ebf5fb', borderRadius: '10px', border: '1px solid #aec6cf', marginBottom: '20px' }}>
						<h3 style={{ color: '#2980b9', marginTop: 0 }}>📞 Actualizar Teléfono de Contacto</h3>
						<form onSubmit={modificarTelefono} style={{ display: 'grid', gap: '10px' }}>
							<input type="text" value={idModificar} onChange={(e) => setIdModificar(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ingresa tu ID de 6 dígitos" />
							<input type="text" value={nuevoTelefono} onChange={(e) => setNuevoTelefono(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Nuevo Teléfono (9 dígitos)" />
							<button type="submit" style={{ padding: '10px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Actualizar Número</button>
						</form>
					</div>

					{/*Eliminarse con id*/}
					<div style={{ padding: '20px', backgroundColor: '#fdf2f2', borderRadius: '10px', border: '1px solid #f5c6cb' }}>
						<h3 style={{ color: '#c0392b', marginTop: 0 }}>¿Deseas Salir del Voluntariado? ❌</h3>
						<form onSubmit={darDeBaja} style={{ display: 'flex', gap: '10px' }}>
							<input type="text" value={idBaja} onChange={(e) => setIdBaja(e.target.value)} style={{ flex: '1', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ingresa tu ID de 6 dígitos" />
							<button type="submit" style={{ padding: '10px 15px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Baja</button>
						</form>
					</div>

				</div>

				{/*lista de voluntarios */}
				<div style={{ flex: '1', minWidth: '300px', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '12px', border: '1px solid #e9ecef', alignSelf: 'flex-start' }}>
					<h3 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '5px' }}>👥 Voluntarios Activos</h3>
					<p style={{ fontSize: '13px', color: '#7f8c8d', marginBottom: '20px' }}>Los identificadores privados no se muestran por seguridad.</p>

					{voluntarios.length === 0 ? (
						<p style={{ color: '#95a5a6', fontStyle: 'italic', textAlign: 'center', marginTop: '30px' }}>No hay voluntarios registrados aún.</p>
					) : (
						<div style={{ display: 'grid', gap: '12px' }}>
							{voluntarios.map((v) => (
								<div key={v.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '15px', borderRadius: '8px', borderLeft: `6px solid ${darColor(v.area)}` }}>
									<div>
										<strong style={{ color: '#2c3e50' }}>👤 {v.alias}</strong>
									</div>
									<div>
										<span style={{ padding: '5px 12px', borderRadius: '20px', backgroundColor: darColor(v.area), color: 'black', fontSize: '11px', fontWeight: 'bold' }}>
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