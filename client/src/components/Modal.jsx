import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import canvasState from "../store/canvasState";

const ModalWindow = () => {
    const usernameRef = useRef()

    const connectionHandler = () => {
        canvasState.setUsername(usernameRef.current.value)
        setModal(false)
    };

    const [modal, setModal] = useState(true)

    return (
        <Modal show={modal} onHide={() => {}}>
            <Modal.Header closeButton>
                <Modal.Title>Enter your name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" ref={usernameRef} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => connectionHandler()}>
                    Enter
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalWindow;
