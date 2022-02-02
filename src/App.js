import { useState } from "react";
import Modal from "./Modal";
import styles from "./css/App.module.css";

//import LoginForm from "./LoginForm";

function App() { 

  const [user, setUser] = useState({name:"", email:""}); //Save user info
  const [modalShow, setModalShow] = useState(false); // ON&OFF Modal
  
  // Get user input value
  const onChangeName = (event) => {
    setUser({...user, name:event.target.value})};
  const onChangeEmail = (event) => {
    setUser({...user, email:event.target.value})};

   // Off the modal 
  const closeModal = () => {
    setUser({name:"", email:""});
    setModalShow(false)};
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (user.name ===""||user.email ==="") {
      return;
    }
    setModalShow(true);    
  };

    return (
    <div>
      {/* LoginForm */}
      <form onSubmit={onSubmit} className={styles.login_form}>
        <div className={styles.tag}>Limited Offer</div>
        <div className={styles.greeting}>Sign up to get your free trial today!</div>
        <div className={styles.form_name}>
          <label htmlFor="name">Name</label>
          <input onChange={onChangeName} value={user.name} type="text" name="name" id="name" placeholder="Enter your Name" />
        </div>
        <div className={styles.form_email}>
          <label htmlFor="email">Email</label>
          <input onChange={onChangeEmail} value={user.email} type="email" name="email" id="email" placeholder="Enter your Email" />
          </div>
        <button className={styles.submit_btn}>Start My Free Trial</button>
        </form>


        {/* modal */}
        {modalShow? <Modal closeModal={closeModal} name={user.name} email={user.email}></Modal> : null}
        
        
      </div>
    
     
  );
}

export default App;
