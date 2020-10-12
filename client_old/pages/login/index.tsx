import Router from 'next/router'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { postData } from '../../utils/api'
import styles from './login.module.css'

function LoginPage (props) {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()
    const data = await postData('/signin', {
      nickname,
      password
    })
    if (data.status === 'fail') {
      setError(data.message)
    } else {
      Cookies.set('auth', data.token)
      Router.push('/')
    }
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
          {error && <p>{error}</p>}
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
