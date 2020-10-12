import Router from 'next/router'
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { postData } from '../../utils/api'
import styles from './register.module.css'

function RegisterPage () {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()
    const data = await postData('/signup', {
      nickname,
      password,
      passwordConfirmation
    })
    if (data.status === 'fail') {
      setError(data.message)
    } else {
      Router.push('/login')
    }
  }

  return (
    <Layout>
      <div className={styles.register}>
        <form onSubmit={handleSubmit} className={styles.registerForm}>
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

          <label htmlFor='passwordConfirmation'>Password Confirmation</label>
          <input
            type='password'
            id='passwordConfirmation'
            placeholder='Confirm Password'
            className={styles.input}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          {error && <p>{error}</p>}
          <button type='submit' className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterPage
