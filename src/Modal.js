

function Modal ({name, email, closeModal}) {
    return (
    <div className="modal">
        <div className="overlay"></div>
        <div className="popup">
          <button onClick={closeModal} id="popup_close">X</button>
          <div id="popup_img"><img src="" alt="welcome" /></div>
          <h3 id="popup_greeting">Welcome!{name}</h3>
          <p id="popup_text">Thanks for filling out the form. A confirmation email has been sent to your {email} account.</p>
        </div>
      </div>
    );
    
}

export default Modal;