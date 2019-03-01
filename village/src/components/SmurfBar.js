import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import './SmurfBar.css';

const NavWrapper = styled.div`
    text-align: justify;
    display: flex:
    width: 900px;
    height: 30px;
    align-items: center;
    justify-content: space-between;
`;

const SmurfBar = props => {
    return (
        <div>
            <NavWrapper>
                <NavLink className="linkNav" to="/">Smurf List</NavLink>
                <NavLink className="linkNav" to="/smurf-form">Add a Smurf</NavLink>
            </NavWrapper>
        </div>
    )
}



export default SmurfBar;