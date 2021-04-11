import React from 'react'
import { RiLockUnlockFill, RiUser3Fill } from "react-icons/ri";

function Login() {
    return (
            <div className="login-page">
                <div className="login-form">
                    <div className="user-icon">
                        <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" alt=""/>
                    </div>
                  <form action="">
                      <div className="username">
                      <input type="email" name="user-mail" id="user-mail" placeholder="Kullanıcı Adı"/>
                      <div className="username-icon">
                          <RiUser3Fill />
                      </div>
                      </div>
                      <div className="password">
                      <input type="password" name="user-password" id="user-password" placeholder="Parola" />
                      <div className="password-icon"><RiLockUnlockFill /></div>
                      </div>
                      <button type="submit">Giriş Yap</button>
                  </form>
                </div>
            </div>
            
    )
}

export default Login
