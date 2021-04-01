import React from 'react'

function Login() {
    return (
            <div className="login">
                <div className="login-form">
                  <form action="">
                      <input type="email" name="user-mail" id="user-mail"/>
                      <input type="password" name="user-password" id="user-password"/>
                      <button type="submit">Giriş Yap</button>
                  </form>
                </div>
            </div>
            
    )
}

export default Login
