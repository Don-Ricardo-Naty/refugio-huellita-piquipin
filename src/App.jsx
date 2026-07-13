/////////////////////////////////////////////////////////////////////////////////////
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Inicio from './components/Inicio';
import Acerca from './components/Acerca';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* "minHeight: '100vh'" como estilo para que tire el footer abajo*/}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', margin: 0 }}>

        {/*Barra de arriba*/}
        <header style={{ backgroundColor: '#4c0e2d', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#e7dee2', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🐾 Huellita Piquipin
          </div>/////////////////////////////////////////////
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
            <Link to="/ser-voluntario" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Ser Voluntario</Link>
            <Link to="/nosotros" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Nosotros</Link>
          </nav>
        </header>

        {/*vista principal*/}
        <main style={{ flex: '1', backgroundColor: '#fff' }}>
          <Routes>//////////////////////////////////////////////////////////////////////////
            <Route path="/" element={<Inicio />} />
            <Route path="/ser-voluntario" element={<Formulario />} />
            <Route path="/nosotros" element={<Acerca />} />
          </Routes>
        </main>

        {/*footer*/}
        <Footer /> {/* uno cuando baja lo ve los datos de contacto y asi*/}

      </div>
    </Router>
  );
}

export default App;