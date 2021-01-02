import React from 'react'
import { Layout, Menu } from 'antd'
import { css } from 'emotion'
import { COLOR } from '../../constants/color'
import { Hero, Rules, Footer } from './components'

const layoutCss = css({
  maxWidth: '1200px',
  margin: 'auto',
  fontFamily: `'Milonga', cursive`,
})

const headerCss = css({
  backgroundColor: `${COLOR.GREEN} !important`,
  color: `${COLOR.WHITE} !important`,
})

const contentCss = css({
  backgroundColor: `${COLOR.GRAY} !important`,
})

const { Header, Content } = Layout

function Home(): JSX.Element {
  return (
    <Layout className={layoutCss}>
      <Header className={headerCss}>Quiero re truco</Header>
      <Content className={contentCss}>
        <Hero />
        <Rules />
        <Footer />
      </Content>
    </Layout>
  )
}

export { Home }
