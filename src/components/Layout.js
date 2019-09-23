import React from 'react'
import { Header } from './header'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Layout = props => (
  <>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {props.children}
    </div>
  </>
)

//Layout.propTypes = {
//  children: PropTypes.node.isRequired,
//}

export default Layout
