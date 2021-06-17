import logo from './logourrea.png';
import baner from './baner.jpg'
import face from './face.png'
import insta from './insta.png'
import youtube from './youtube.png'
import baner1 from './1.jpg'
import baner2 from './2.jpg'
import baner3 from './3.jpg'
import Productos from './productos/424F.jpg'
import './App.css';


function App() {
  return (

<div className="App">
      <header className="App-header">
        <nav ClassName="Appmenu">
        <img src={logo} width= '250' height='auto' ></img>
                    <a href='#'> Inicio </a>
                    <a href='#'> Sobre Nosotros </a>
                    <a href='#'> Tienda </a>
                    <a href='#'> Contacto </a>
        </nav>
        <h1> Las mejores herramientas...</h1>  
      </header>

<body className="Appbody">
  <div ClassName="Appbaner">
    <img src={baner} className="App-baner" alt="baneser" />
    <img src={baner1} className="App-baner" alt="baner" />
    <img src={baner2} className="App-baner" alt="baner" />
    <img src={baner3} className="App-baner" alt="baner" />
  </div>

<section ClassName="Container">
  <div ClassName="ContainerProductos"> </div>
    <div ClassName="Productos1">
      <img ClassName= "Producto_1" src={Productos}  alt="producto" />
    </div>        
    
  <div className="info">
    <h2> Tornillo de banco 4" Foy </h2>
      <p> -Longitud total 235mm, apertura máxima de la quijada 90mm, profundidad de la garganta de 50mm, ancho de quijada de 100mm, ancho de quijada de 10KN. Diámetro de orificios de ensamble 9mm(+/- 5%). Peso 4.8 kg (+/-3%). 
        -Base giratoria de 360°.
        -Hecho en hierro fundido.
        -Dureza de quijada de 48-53 HRC (+/-2). 3 orificios de montaje. 
        -Acabado: recubrimiento en polvo. Tipo de cara: áspera.
        -Dan el poder necesario para sujetar uno o más elementos de forma eficaz mientras son sometidos a diferentes operaciones mecánicas como aserrado, perforado, fresado, limado o marcado. </p>
  </div>

</section>

<div className="App_Text_Form"> <h2>¡Que gusto que estés aquí! dinos cómo podemos ayudarte en el siguiente formulario </h2> </div>

<section ClassName="Form"> 
  <form ClassName="AppForm">
      <label> <div> Nombre:</div> <input type="text" name="name" /> </label>
      <label> <div> Telefono:</div> <input type="text" name="phone" /> </label>
      <label> <div> Correo:</div> <input type="text" name="mail" /> </label>
      <label> <div> Asunto:</div> <input type="text" name="message" /> </label>
      <label> <div> Si lo desea por favor dejenos el SKU que quiere comprar:</div> <input type="text" name="sku" /> </label>
      <div><input type="submit" value="ENVIAR" /></div>
  </form>
</section>

</body>

<footer>
  <div className='container_footer'>
    <div className='footer_section'>
      <h3>Síguenos en nuestras redes sociales </h3>
    </div>
          
    <div className='footer_img'>
      <img src={face} width= '150' height='150' ></img>
      <img src={insta} width= '150' height='150' ></img>
      <img src={youtube} width= '150' height='150' ></img>
    </div>
                  
    <div className='footer_section'>
      <h3>Telefonos</h3>
        <p>333-555-4444</p>
        <p>555-888-7946</p>
    </div>
        
    <div className='footer_section'>
      <h3>Correos</h3>
        <p>correo@correo.com</p>
        <p>contacto@correo.com</p>
    </div>
  </div>
</footer>

</div>
 
);

}

export default App;
