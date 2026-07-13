function Footer() {
	return (
		<footer style={{ backgroundColor: '#460c33', color: 'white', textAlign: 'center', padding: '20px', marginTop: 'auto' }}>
			<p style={{ margin: '0 0 10px 0' }}>
				&copy; 2026 Refugio Huellita Piquipin - Más que mascotas.
			</p>
			<div style={{ color: '#bdc3c7', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '14px' }}>
				<span>📧 huellitaPiquipin@gmail.com</span>
				<span>📞 +56 9 1234 5678</span>
				<span>📍 Las Condes, Apoquindo 7282</span>
			</div>
		</footer>
	);
}

export default Footer;