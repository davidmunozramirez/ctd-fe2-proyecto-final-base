import { INoticiasNormalizadas } from "./INoticiasNormalizadas.interface";

export interface IPropsTarjetaNoticias {
    noticia: INoticiasNormalizadas,
    setModal: ( noticia: INoticiasNormalizadas)=>void
}