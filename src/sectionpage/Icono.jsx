import IconoSonido from '../img/icono-sonido.svg';
import IconoGarantia from '../img/icono-garantia.svg';
import IconoBateria from '../img/icono-bateria.svg';

export const Icono = () => {
  return (
    <section className="contenedor">
        <div className="iconos">
            <div className="icono">
                <img src= { IconoSonido } alt="imagen icono" />
                <h3>GRAN SONIDO</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque deserunt, expedita odit fugit iusto in autem labore totam recusandae debitis cum odio eius reprehenderit repellendus molestiae! Iste, voluptatibus quia.</p>
            </div>
            <div className="icono">
                <img src= { IconoGarantia } alt="imagen icono" />
                <h3>GARANTIA DE POR VIDA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque deserunt, expedita odit fugit iusto in autem labore totam recusandae debitis cum odio eius reprehenderit repellendus molestiae! Iste, voluptatibus quia.</p>
            </div>
            <div className="icono">
                <img src= { IconoBateria } alt="imagen icono" />
                <h3>20 HORAS DE BATERIAS</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque deserunt, expedita odit fugit iusto in autem labore totam recusandae debitis cum odio eius reprehenderit repellendus molestiae! Iste, voluptatibus quia.</p>
            </div>
        </div>
    </section>
  )
}
