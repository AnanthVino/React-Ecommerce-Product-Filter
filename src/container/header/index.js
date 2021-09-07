/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  min-height: 100px;
  background: #ff5c33;
`
const Header =() => {
    return (
        <Nav className="navbar navbar-light mb-5">
            <div className="navbar-header">
                <div className="navbar-brand text-white text-lg brand-text font-weight-bold">
                    NU
                </div>
            </div>
        </Nav>
    )
}

export default Header;