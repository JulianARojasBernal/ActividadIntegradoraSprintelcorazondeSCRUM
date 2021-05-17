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
          <li><a href="App_Form.js">Contacto</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
        </nav>

      </header>

      <body className="Appbody">

        

        <div ClassName="Appbaner">
        <img src={baner} className="App-baner" alt="baner" />

        </div>

        <div className="App_Text_Form">¡Que gusto que estés aquí! dinos cómo podemos ayudarte en el siguiente formulario </div>

        <form ClassName="AppForm">
  <label>
   <div> Nombre:</div>
    <input type="text" name="name" />
  </label>
  <label>
   <div> Telefono:</div>
    <input type="text" name="phone" />
  </label>
  <label>
  <div> Correo:</div>
    <input type="text" name="mail" />
  </label>
  <label>
  <div> Asunto:</div>
    <input type="text" name="message" />
  </label>
  <label>
  <div> Si lo desea por favor dejenos el SKU que quiere comprar:</div>
    <input type="text" name="sku" />
  </label>
  <div><input type="submit" value="ENVIAR" /></div>
</form>

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
