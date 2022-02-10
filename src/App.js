import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import LoginForm from "./LoginForm/LoginForm";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const closeModal = () => {
    setModalShow(false);
  };

  useEffect(() => {
    if (name === "" || email === "") {
      return;
    }
    setModalShow(true);
  }, [name]);

  return (
    <>
      <LoginForm setName={setName} setEmail={setEmail} />
      {modalShow && <Modal onClose={closeModal} name={name} email={email} />}
    </>
  );
}

export default App;
