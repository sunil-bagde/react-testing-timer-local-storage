import React, { useEffect, useState } from "react";
import Modal from "react-modal";
 
const customStyles = {
    overlay: {
        backgroundColor: "#eee",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: 500,
    },
};
const Instruction = () => {
    const _agree = localStorage.getItem("agree") ?? false;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [agree, setAgree] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        setTimeout(() => {
            const isAgreed = !!_agree;
            if (isAgreed == false) {
                openModal(true);
            }
        }, 1000);
         Modal.setAppElement('body');
    }, []);

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }
    function handleAgreeCheck(event) { 
        if (event.target.checked) { 
            setAgree(true);
            localStorage.setItem("agree", "true");
        } else {
            setAgree(false);
        }
    }
    return (
        <div>
            <button data-testid="instruction-open-modal" onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <button data-testid ="instruction-close-modal" onClick={closeModal}>close</button>
                    <div></div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <label>Agree</label>
                    <input
                        onChange={handleAgreeCheck}
                        data-testid="instruction-agree"
                        checked={agree}
                        type="checkbox"
                    ></input>
                </div>
            </Modal>
        </div>
    );
};

export { Instruction };
