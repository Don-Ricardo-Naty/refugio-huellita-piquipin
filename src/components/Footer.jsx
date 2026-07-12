// src/components/Footer.jsx
function Footer() {
	return (
		<footer style={{ backgroundColor: '#2c3e50', color: 'white', textAlign: 'center', padding: '25px 20px', marginTop: 'auto' }}>
			<p style={{ margin: '0 0 10px 0', fontSize: '1.05rem', fontWeight: '500' }}>
				&copy; 2026 Refugio Huellita Piquipin - Más que mascotas,.
			</p>
			<div style={{ fontSize: '0.9rem', color: '#bdc3c7', display: 'flex', justifyContent: 'center', gap: '20px' }}>
				<span>📧 huellitaPiquipin@gmail.com</span>
				<span>📞 +56 9 1234 5678 </span>
				<span>📍 Las Condes, Apoquindo 7282</span>
			</div>
		</footer>
	);
}

export default Footer;