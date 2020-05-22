import { Fragment } from 'react'
import styles from './Layout.module.css'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Layout