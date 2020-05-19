interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Layout