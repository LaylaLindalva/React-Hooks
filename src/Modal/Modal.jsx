

const Modal = ({modal, setModal}) => {
    if(modal === true){
    return(
        <div>
            Esse é o meu primeiro Modal
            <button onClick={() => setModal(false)}>
            Fechar Modal
            </button>
        </div>
    )
} else {
    return null
}
}

export default Modal;