import React from 'react'
import { Layout, Menu } from 'antd'
import { css } from 'emotion'
import { COLOR } from '../../constants/color'
import { Hero, Rules } from './components'

const layoutCss = css({
  maxWidth: '1200px',
  margin: 'auto',
})

const headerCss = css({
  backgroundColor: `${COLOR.GREEN} !important`,
  color: `${COLOR.WHITE} !important`,
})

const { Header, Content, Footer} = Layout

function Home(): JSX.Element {
  return (
    <Layout className={layoutCss}>
      <Header className={headerCss}>Quiero re truco</Header>
      <Content>
        <Hero />
        <Rules />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export { Home }
