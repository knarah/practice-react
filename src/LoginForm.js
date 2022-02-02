function LoginForm() {
    return (
        <div>
            <form className="login_form">
                <div className="tag">Limited Offer</div>
                <div className="greeting">Sign up to get your free trial today!</div>
              
                <div clasNames="login_name">                      <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your Name" />
                </div>
                <div className="login_email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your Email" />
                </div>
                <button id="submit_btn">Start My Free Trial</button>
            </form>
      </div>
      )
}

export default LoginForm;