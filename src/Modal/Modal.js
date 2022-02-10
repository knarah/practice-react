import styles from "./Modal.module.css";
import welcome from "../img/welcome.png";

function Modal({ userName, userEmail, onClose }) {
  const domainString = userEmail.substring(userEmail.lastIndexOf("@") + 1);
  const domainName = domainString
    .substring(0, domainString.indexOf("."))
    .toUpperCase();

  return (
    <div onClick={onClose} className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.popup}>
        <button id={styles.popup_close}>X</button>
        <div id={styles.popup_img}>
          <img src={welcome} alt="welcome" />
        </div>
        <h3 id={styles.popup_greeting}>Welcome, {userName}!</h3>
        <p id={styles.popup_text}>
          Thanks for filling out the form. A confirmation email has been sent to
          your <span>{domainName}</span> account.
        </p>
      </div>
    </div>
  );
}

export default Modal;
