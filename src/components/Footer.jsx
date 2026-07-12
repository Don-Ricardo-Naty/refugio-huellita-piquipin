// src/components/Footer.jsx

export default function Footer() {
	const footerEstilo = {
		backgroundColor: '#2c3e50',
		color: 'white',
		textAlign: 'center',
		padding: '20px',
		marginTop: 'auto',
		fontFamily: 'sans-serif'
	};

	const infoEstilo = {
		display: 'flex',
		justifyContent: 'center',
		gap: '15px',
		flexWrap: 'wrap',
		fontSize: '0.9rem',
		marginTop: '10px'
	};

	return (
		<footer style={footerEstilo}>
			<p style={{ margin: 0 }}>
				&copy; 2026 Refugio Huellita Piquipin - Más que mascotas.
			</p>

			<div style={infoEstilo}>
				<span>📧 huellitaPiquipin@gmail.com</span>
				<span>📞 +56 9 1234 5678</span>
				<span>📍 Las Condes, Apoquindo 7282</span>
			</div>
		</footer>
	);
}