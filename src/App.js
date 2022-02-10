import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import LoginForm from "./LoginForm/LoginForm";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const getUserName = (userName) => {
    setUserName(userName);
  };

  const getUserEmail = (userEmail) => {
    setUserEmail(userEmail);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  useEffect(() => {
    if (userName === "" || userEmail === "") {
      return;
    }
    setModalShow(true);
  }, [userName]);

  return (
    <>
      <LoginForm getUserName={getUserName} getUserEmail={getUserEmail} />
      {modalShow && (
        <Modal onClose={closeModal} userName={userName} userEmail={userEmail} />
      )}
    </>
  );
}

export default App;
