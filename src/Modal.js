import styles from "./css/Modal.module.css";
import welcome from "./img/welcome.png"

function Modal ({name, email, closeModal}) {
        // To get only the domain name from email address
        const domainString = email.substring(email.lastIndexOf('@') +1);
        const domainName = domainString.substring(0, domainString.indexOf('.')).toUpperCase();     
    
    return (
        <div onClick={closeModal} className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.popup}>
                <button id={styles.popup_close}>X</button>
                <div id={styles.popup_img}><img src={welcome} alt="welcome" /></div>
                <h3 id={styles.popup_greeting}>Welcome, {name}!</h3>
                <p id={styles.popup_text}>Thanks for filling out the form. A confirmation email has been sent to your <span>{domainName}</span> account.</p>
            </div>
      </div>
    );
    
}

export default Modal;