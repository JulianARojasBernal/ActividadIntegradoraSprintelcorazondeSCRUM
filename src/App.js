import logo from './logourrea.png';
import baner from './baner.jpg'
import face from './face.png'
import insta from './insta.png'
import youtube from './youtube.png'
import baner1 from './1.jpg'
import baner2 from './2.jpg'
import baner3 from './3.jpg'
import Productos from './productos/424F.jpg'
import Productos2 from './productos/BEP01.jpg'
import Productos3 from './productos/HL1074.jpg'
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

      <h2> Un poco de nosotros</h2>
      <section className="nosotros">
      <div className="nosotros1">
        <p> Somos una empresa 100% Mexicana con presencia global, con más de 100 años de vida. Grupo Urrea está integrado por dos divisiones: “Dando vida al agua” y “Solución Total en Herramientas y Cerrajería” ambas líderes en sus respectivos mercados. Sus marcas satisfacen las necesidades de los usuarios y son reconocidas en más de 20 países del continente americano, incluyendo los EUA. </p>

        <p> La División Herramientas y Cerrajería nace de la asociación entre Grupo Urrea y un fabricante de herramienta en EUA, para crear Protomex, antecesor de Grupo Urrea División Herramientas. Posteriormente con la integración de la marca LOCK al portafolio de esta división, se da origen a lo que actualmente conocemos como “Grupo Urrea Solución Total en Herramientas y Cerrajería”       
        </p>

      </div>
        </section>

<body className="Appbody">
  <h2> Las Mejores Herramientas</h2>
  <div ClassName="Appbaner">
      <img src={baner} className="App-baner" alt="baner" />
      <img src={baner1} className="App-baner" alt="baner" />
  </div>

  <div className="titulo"><h2> Productos Destacados </h2></div>
  
  <div className="ContainerProductos"> 
    <div className="Productos">
      <h3> Tornillo de banco 4" Foy </h3>
        <p> -Longitud total 235mm, apertura máxima de la quijada 90mm, profundidad de la garganta de 50mm, ancho de quijada de 100mm, ancho de quijada de 10KN. Diámetro de orificios de ensamble 9mm(+/- 5%). Peso 4.8 kg (+/-3%). 
        -Base giratoria de 360°.
        -Hecho en hierro fundido.
        -Dureza de quijada de 48-53 HRC (+/-2). 3 orificios de montaje. 
        -Acabado: recubrimiento en polvo. Tipo de cara: áspera.
        -Dan el poder necesario para sujetar uno o más elementos de forma eficaz mientras son sometidos a diferentes operaciones mecánicas como aserrado, perforado, fresado, limado o marcado. </p>
    </div>
  
    <div className="Productosimagen">
        <img  src={Productos}  alt="producto" />
    </div> 
  
  </div>
  
  <div className="ContainerProductos"> 
    <div className="Productos">
      <h3> Banco de energía portatil inalámbrico Urrea </h3>
        <p> -Banco de energía portátil capacidad: 8000mah. Doble puerto USB y 1 puerto tipo c. Carga nfc. Amplia compatibilidad.
        -Compatible con dispositivos qi. Protección contra cortocircuitos.
        -Indicador led de energía. Indicador de carga inalámbrica. Batería de polímero. 
        -Batería externa portátil para carga alámbrica e inalámbrica de celulares, cámaras, tabletas.</p>
    </div>
  
    <div className="Productosimagen">
        <img  src={Productos2}  alt="producto2" />
    </div> 
  
  </div>

  <div className="ContainerProductos"> 
    <div className="Productos">
      <h3> Hidrolavadora eléctrica URREA con potencia de 5 500 W, presión máxima de 4 000 psi, flujo máximo de salida de 10.5 L/min, flujo de alimentación de 20 L/min, voltaje de 220 V, motor trifásico, frecuencia de 60 Hz Urrea </h3>
      <p> -Potencia: 5 500 w. Voltaje: 220 v. Frecuencia: 60 Hz.
        -Presión máxima: 4,000 psi. Presión nominal: 25 mpa. Flujo máximo de salida: 10,5 l/min. Flujo de alimentación: 20 l/min.
        -Temperatura máxima: 40 °c. Velocidad en vacío: 1 750 r/min. 
        -Motor trifásico de inducción, bomba tríplex de uso industrial, carro metálico con ruedas neumáticas.
        -Sistema autostop, incluye botella para detergente, doble filtro para impedir el paso de impurezas a la bomba.
        -Brinda la potencia requerida para ejecutar la limpieza deseada, al momento de lavar un vehículo, limpiar terrazas, cortinas, contenedores, entre muchas otras actividades de limpieza.</p>
    </div>
  
    <div className="Productosimagen">
        <img  src={Productos3}  alt="producto3" />
    </div> 
  
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
  
  <h2> </h2>
  <div ClassName="Appbaner">
    <img src={baner2} className="App-baner" alt="baner" />
    <img src={baner3} className="App-baner" alt="baner" />
  </div>
  <h2> </h2>
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
