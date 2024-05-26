function Modal(props) {

    function confirmHandler() {
        props.onConfirm();
    }


    function cancelHandler() {
        props.onCancel();
    }


    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={confirmHandler}>Confirm</button>
            <button className="btn" onClick={cancelHandler} >Cancel</button>
        </div>
    );

}


export default Modal;