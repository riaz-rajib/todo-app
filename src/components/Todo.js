import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {

    const[isModalOpen, setIsModalOpen] = useState(false);


    function deleteHandler(){
        setIsModalOpen(true);
    }


    function closeModalHandler() {
        setIsModalOpen(false);
    }



    return (
        <div className="card">
            <h3>{props.title}</h3>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {isModalOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />}
            {isModalOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
    );

}


export default Todo;