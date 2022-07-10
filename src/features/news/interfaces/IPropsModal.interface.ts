import { INoticiasNormalizadas } from "./INoticiasNormalizadas.interface";

export interface IPropsModal {
    modal: INoticiasNormalizadas | null,
    setModal: ( noticia: INoticiasNormalizadas  | null ) => void
}
