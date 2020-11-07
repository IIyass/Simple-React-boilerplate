import React from 'react'
import * as Style from './style'
import { Link } from 'react-router-dom'
import { Container } from '../../Common'
const NavBar = () => {
    return (
        <Style.Wrapper as={Container}>
            <Link to='/'> Home</Link>
            <Link to='/login'> Login</Link>
            <Link to='/signup'>  Signup</Link>
            <Link to='/other'> Other</Link>
        </Style.Wrapper>
    )
}


export default NavBar;