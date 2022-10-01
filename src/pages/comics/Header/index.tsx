import React from 'react'
import logo from '../../img/marvel-logo.jpg'
import { HeaderContainer, Logo } from './styles'


const  Header = ()  => {
    return (
        <HeaderContainer className='center'>
            <Logo src={logo} />
        </HeaderContainer>
    )                
}

export default Header

