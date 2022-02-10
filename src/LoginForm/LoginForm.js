import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm({ getUserName, getUserEmail }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = (event) => setName(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "") {
      return;
    }
    getUserName(name);
    getUserEmail(email);
    setName("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.login_form}>
        <div className={styles.tag}>Limited Offer</div>
        <div className={styles.greeting}>
          Sign up to get your free trial today!
        </div>
        <div className={styles.form_name}>
          <label htmlFor="name">Name</label>
          <input
            onChange={onChangeName}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
          />
        </div>
        <div className={styles.form_email}>
          <label htmlFor="email">Email</label>
          <input
            onChange={onChangeEmail}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
        </div>
        <button className={styles.submit_btn}>Start My Free Trial</button>
      </form>
    </>
  );
}

export default LoginForm;
