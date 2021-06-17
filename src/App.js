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

      <section>
      <h2> Un poco de nosotros</h2>
      <p> Somos una empresa 100% Mexicana con presencia global, con más de 100 años de vida. Grupo Urrea está integrado por dos divisiones: “Dando vida al agua” y “Solución Total en Herramientas y Cerrajería” ambas líderes en sus respectivos mercados. Sus marcas satisfacen las necesidades de los usuarios y son reconocidas en más de 20 países del continente americano, incluyendo los EUA. </p>

      <p> La División Herramientas y Cerrajería nace de la asociación entre Grupo Urrea y un fabricante de herramienta en EUA, para crear Protomex, antecesor de Grupo Urrea División Herramientas. Posteriormente con la integración de la marca LOCK al portafolio de esta división, se da origen a lo que actualmente conocemos como “Grupo Urrea Solución Total en Herramientas y Cerrajería”.        
      </p>
        </section>

<body className="Appbody">
  <h2> Las Mejores Herramientas</h2>
  <div ClassName="Appbaner">
    <img src={baner} className="App-baner" alt="baneser" />
    <img src={baner1} className="App-baner" alt="baner" />
    <img src={baner2} className="App-baner" alt="baner" />
    <img src={baner3} className="App-baner" alt="baner" />
  </div>


  <div ClassName="ContainerProductos"> </div>
    <h2> Productos Destacados </h2>
    <div ClassName="Productos1">
      <img ClassName= "Producto_1" src={Productos}  alt="producto" />
    </div>        
    
  <div className="info">
    <h3> Tornillo de banco 4" Foy </h3>
      <p> -Longitud total 235mm, apertura máxima de la quijada 90mm, profundidad de la garganta de 50mm, ancho de quijada de 100mm, ancho de quijada de 10KN. Diámetro de orificios de ensamble 9mm(+/- 5%). Peso 4.8 kg (+/-3%). 
        -Base giratoria de 360°.
        -Hecho en hierro fundido.
        -Dureza de quijada de 48-53 HRC (+/-2). 3 orificios de montaje. 
        -Acabado: recubrimiento en polvo. Tipo de cara: áspera.
        -Dan el poder necesario para sujetar uno o más elementos de forma eficaz mientras son sometidos a diferentes operaciones mecánicas como aserrado, perforado, fresado, limado o marcado. </p>
  </div>


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
      <a href="https://www.facebook.com/Urrea-Las-mejores-herramientas-105167951772127" target="_blank"> <img src={face} width= '150' height='150' ></img> </a>
      <a href="https://www.instagram.com/urrea_2021/?utm_medium=copy_link" target="_blank"> <img src={insta} width= '150' height='150' ></img> </a>
      <a href="https://www.youtube.com/channel/UCxsUrXuR2Dia_Jx0fbbCqUA/videos?view=0&sort=dd&shelf_id=0" target="_blank"> <img src={youtube} width= '150' height='150' ></img> </a>
          
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
