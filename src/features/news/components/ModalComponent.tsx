import { IPropsModal } from "../interfaces/IPropsModal.interface";
import { IModalCompProps } from "../interfaces/IModalCompProps.interface";

import { SuscribeImage, CloseButton as Close } from "../../../assets";
//import { IPropsTarjetaNoticias } from "../interfaces/IPropsTarjetaNoticias.interface";
// import { INoticiasNormalizadas } from "../interfaces/INoticiasNormalizadas.interface";

import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal,  } from "../styled";

  
const ModalComponent = ( { modal, setModal }: IPropsModal ) => {
    return (
                <div>
                    <ContenedorModal>
                        <TarjetaModal>
                            <CloseButton onClick={() => setModal(null)}>
                                <img src={Close} alt="close-button" />
                            </CloseButton>
                            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
                            <CotenedorTexto>
                                <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                                <DescripcionModal>
                                Suscríbete a nuestro newsletter y recibe noticias de
                                nuestros personajes favoritos.
                                </DescripcionModal>
                                <BotonSuscribir
                                onClick={() =>
                                    setTimeout(() => {
                                    alert("Suscripto!");
                                    setModal(null);
                                    }, 1000)
                                }
                                >
                                Suscríbete
                                </BotonSuscribir>
                            </CotenedorTexto>
                        </TarjetaModal>
                    </ContenedorModal>
                    
                    <ContenedorModal>
                        <TarjetaModal>
                            <CloseButton onClick={() => setModal(null)}>
                                <img src={Close} alt="close-button" />
                            </CloseButton>
                            <ImagenModal src={modal!.imagen} alt="news-image" />
                            <CotenedorTexto>
                                <TituloModal>{modal!.titulo}</TituloModal>
                                <DescripcionModal>{modal!.descripcion}</DescripcionModal>
                            </CotenedorTexto>
                        </TarjetaModal>
                    </ContenedorModal>
                </div>    
                
        );
    };
  
export  { ModalComponent };