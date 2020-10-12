import React from 'react'
import { Layout, Menu } from 'antd'
import { css } from 'emotion'
import { COLOR } from '../../constants/color'

const layoutCss = css({

})

const headerCss = css({
  backgroundColor: `${COLOR.BLUE} !important`,
  color: `${COLOR.WHITE} !important`,
})

const { Header, Content, Footer} = Layout

function Home(): JSX.Element {
  return (
    <Layout className={layoutCss}>
      <Header className={headerCss}>Quiero re truco</Header>
      <Content>
        <h1>Home</h1>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export { Home }
