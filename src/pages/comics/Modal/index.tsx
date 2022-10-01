import { ModalContainer, Img } from './styles'
import { DadosModal } from '../index'


interface IModalProps {
    onClose: () => void;
    dadosModal: DadosModal
}

const  Modal = ({ onClose, dadosModal }: IModalProps)  => {

    return (
        <ModalContainer className='modal'>
            <span onClick={onClose}> X </span>
            <div>
                <Img src={`${dadosModal.thumbnail.path}.${dadosModal.thumbnail.extension}`} alt="" />
                <h2>Nome: {dadosModal.name || 'Sem nome definido'}</h2>
                <br />
                <h3>Descrição: {dadosModal.description || 'Sem descrição definida'}</h3>
            </div>
        </ModalContainer>
    )                
}

export default Modal