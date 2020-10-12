import styles from './Modal.module.css'

interface Props {
  show: boolean,
  handleModal: any,
  children: React.ReactNode
}

function Modal({ handleModal, show, children }: Props) {
  return (
    <div className={`${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
      <section className={styles.modalMain}>
        {children}
        <button onClick={handleModal} className={styles.button}>Aceptar</button>
      </section>
    </div>
  );
}

export default Modal
