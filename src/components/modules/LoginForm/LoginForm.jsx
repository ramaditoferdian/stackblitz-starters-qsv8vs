import React from "react";
import styles from "./index.module.css"

const LoginForm = () => {
  return(
    <div className={styles['login-form']}>
      <h1 style={{color: '#3E334E', lineHeight: '48px'}}>Hello</h1>
      <span style={{color: '#3E334E', lineHeight: '27px', fontWeight: 400, fontSize: 18}}>Enter your email and password to login.</span>
    </div>
  )
}

export default LoginForm;