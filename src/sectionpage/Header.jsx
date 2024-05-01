import HeaderImg from '../img/header.png';

export const Header = () => {
  return (
    <header className='header'>
      <div className="contenedor contenido-header">
        <div className="imagen-header">
          <picture>
            <img src={ HeaderImg } alt="" />
          </picture>
        </div>
        <div className="texto-header">
          <p className="tagline-producto">Sonido Profesional</p>
          <h1 className="nombre-producto degradado-verde">TechPRO</h1>
          <p className="descripcion-producto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia veniam molestias, exercitationem ipsum nulla at ea laborum, harum, impedit error omnis ad facere inventore praesentium incidunt deserunt officiis qui.</p>
          <p className="precio-producto">Desde <span>$299</span></p>
        </div>
      </div>
    </header>
  )
}
