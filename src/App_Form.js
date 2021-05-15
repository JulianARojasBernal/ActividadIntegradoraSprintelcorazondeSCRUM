import logo from './logourrea.png';
import baner from './baner.jpg'
import productos from './productos.jpg'
import pie from './pie.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> Las mejores herramientas...</h3>
        
        <nav ClassName="Appmenu"> 
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
        </nav>

      </header>

      <body className="Appbody">

        <div ClassName="Appbaner">
        <img src={baner} className="App-baner" alt="baner" />

        </div>

        <div className="produto1"> 
        <img src={productos} className="App-productos" alt="prodcutos" />
        </div>

      </body>

      <footer className="Apppie">

      </footer>
      <div className="Apppie"> 
        <img src={pie} className="App-pie" alt="pie" />
        </div>

    </div>
  );
}

export default App;
