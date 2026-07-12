// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Acerca from './components/Acerca';
import Formulario from './components/Formulario';
import Footer from './components/Footer'; // <-- 1. IMPORTANTE: Aquí importamos el Footer

function App() {
  return (
    <Router>
      {/* El estilo "minHeight: '100vh'" asegura que la página ocupe toda la pantalla y mande el footer al fondo */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', margin: 0 }}>

        {/* CABECERA (Header) Semántica */}
        <header style={{ backgroundColor: '#2c3e50', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🐾 Huellitas Felices
          </div>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
            <Link to="/ser-voluntario" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Ser Voluntario</Link>
            <Link to="/nosotros" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Nosotros</Link>
          </nav>
        </header>

        {/* CONTENIDO PRINCIPAL DINÁMICO */}
        <main style={{ flex: '1', backgroundColor: '#fff' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ser-voluntario" element={<Formulario />} />
            <Route path="/nosotros" element={<Acerca />} />
          </Routes>
        </main>

        {/* PIE DE PÁGINA (Footer) */}
        <Footer /> {/* <-- 2. IMPORTANTE: Aquí se renderiza en la parte baja de la app */}

      </div>
    </Router>
  );
}

export default App;