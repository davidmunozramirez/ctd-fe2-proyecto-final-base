import { IPropsTarjetaNoticias } from "../interfaces/IPropsTarjetaNoticias.interface";

import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia,
    TituloTarjetaNoticia,  } from "../styled";

  

  const TarjetaParaNoticia = ( { noticia, setModal } : IPropsTarjetaNoticias ) => {
    return (
      <TarjetaNoticia>
        <ImagenTarjetaNoticia src={noticia.imagen} />
        <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>
          {noticia.descripcionCorta}
        </DescripcionTarjetaNoticia>
        <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
      </TarjetaNoticia>
    );
  };
  
  export  { TarjetaParaNoticia };
  