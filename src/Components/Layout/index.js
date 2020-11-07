import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import * as Style from './style'
import { Container } from '../Common'
const Layout = ({ children }) => {
    return (
        <Style.Wrapper as={Container}>
            <NavBar />
            {children}
            <Footer />
        </Style.Wrapper>


    )
}
export default Layout