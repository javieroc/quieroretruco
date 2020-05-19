import styles from './Layout.module.css'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Layout