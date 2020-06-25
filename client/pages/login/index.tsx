import Router from 'next/router'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import styles from './login.module.css'
// import { postData } from '../services/api'

function LoginPage (props) {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  async function handleSubmit (e) {
    // e.preventDefault()
    // const { data: token, errors } = await postData('/php/api/login', {
    //   email,
    //   password
    // })
    // if (errors.length > 0) {
    //   setErrors(errors)
    // } else {
    //   Cookies.set('auth', token)
    //   Router.push('/stock')
    // }
  }

  return (
    <Layout>
      <div className={styles.login}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <label htmlFor='nickname'>Nickname</label>
          <input
            type='text'
            id='nickname'
            placeholder='Nickname'
            className={styles.input}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.length > 0 && (
            <div>
              {errors.map((e, i) => (
                <p key={i}>
                  {e}
                </p>
              ))}
            </div>
          )}
          <button type='submit' className={styles.button}>
            Login
          </button>
          <p>Have not an account yet? <span className={styles.signup} onClick={() => Router.push('/register')}>Sign up</span></p>
        </form>
      </div>
    </Layout>
  )
}

export default LoginPage
