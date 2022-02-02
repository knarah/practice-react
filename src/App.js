import { useState } from "react";
import Modal from "./Modal";
//import LoginForm from "./LoginForm";

function App() {
  const [modalShow, setModalShow] = useState(false);

  const [user, setUser] = useState({name:"", email:""});
  
  const onChangeName = (event) => {
    setUser({...user, name:event.target.value})};

  const onChangeEmail = (event) => {
    setUser({...user, email:event.target.value})};

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
      <form onSubmit={onSubmit} className="login_form">
        <div className="tag">Limited Offer</div>
        <div className="greeting">Sign up to get your free trial today!</div>
        <div className="login_name">
          <label htmlFor="name">Name</label>
          <input onChange={onChangeName} value={user.name} type="text" id="name" placeholder="Enter your Name" />
        </div>
        <div className="login_email">
          <label htmlFor="email">Email</label>
          <input onChange={onChangeEmail} value={user.email} type="email" id="email" placeholder="Enter your Email" />
          </div>
        <button id="submit_btn">Start My Free Trial</button>
        </form>


        {/* modal */}
        {modalShow? <Modal closeModal={closeModal} name={user.name} email={user.email}></Modal> : null}
        
        
      </div>
    
     
  );
}

export default App;
