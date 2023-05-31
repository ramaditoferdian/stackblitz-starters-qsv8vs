import React, { useState } from "react";
import styles from "./index.module.css"
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
} from "react-hook-form"
import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";

const LoginForm = () => {

  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async ({email, password, rememberMe}) => {
    setIsLoading(true);
    
    await setTimeout(async () => {
      setIsLoading(false);
      await alert(
        `
          Email: ${email}
          Password: ${password}
          Remember me: ${rememberMe}
        `
      );
    }, 2000);
    
  }

  if (isLoading) {
    return(
      <LoadingSpinner/>
    )
  }

  return(
    <div className={styles['login-form']}>
      <section className={styles['login-form__head-section']}>
        <h1 style={{color: '#3E334E', lineHeight: '48px'}}>Hello</h1>
        <span style={{color: '#3E334E', lineHeight: '27px', fontWeight: 400, fontSize: 18}}>Enter your email and password to login.</span>
      </section>
      <section >
        <form className={styles['login-form__body-section']} onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            label={'Email'}
            placeholder={'Your email'}
            type={'text'}
            register={register("email")}
            errors={errors.email}
            disabled={isLoading}
          />
          <Input
            id={'password'}
            label={'Password'}
            placeholder={'Your password'}
            type={'password'}
            register={register("password")}
            errors={errors.password}
            disabled={isLoading}
          />
          <div className={styles['login-form__second-section']}>
            <Input type={'checkbox'} label={'Remember me'} id={'rememberMe'} register={register("rememberMe")}/>
            <span>Forgot password?</span>
          </div>
          <div className={styles['login-form__button-section']}>
            <Button type={'submit'} disabled={isLoading}>Login</Button>
            <Button variant={'secondary'}>Sign Up</Button>
          </div>
        </form>
      </section>
      <section className={styles['login-form__footer-section']}>
        <span>Or, login with</span>
        <div className={styles['login-form__button-section']}>
          <Button variant={'social'}>Facebook</Button>
          <Button variant={'social'}>Linkedin</Button>
          <Button variant={'social'}>Google</Button>
        </div>
      </section>
    </div>
  )
}

export default LoginForm;