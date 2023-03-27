import React  from "react";
import styles from './Modal.module.scss'

import Button from "../Button/Button";
import Form from '../Form/Form'

const Modal = ({closeModalFc}) => (
    <div className={styles.wrapper}>
        <Button closeButton onClick={closeModalFc}>X</Button>
        <Form/>
    </div>
)

export default Modal;