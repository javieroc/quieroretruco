import { Fragment } from 'react'

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