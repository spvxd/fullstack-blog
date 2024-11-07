import React from 'react';
import {useDispatch} from 'react-redux';
// import { logout } from '../store/authSlice';

import {
    StyledHeader,
    NavBar,
    NavLinks,
    NavLink,
    LogoutButton,
} from './Header.styled';

const Header = () => {
    // const dispatch = useDispatch();

    const handleLogin = () => {
        // dispatch(logout());
    };

    return (
        <StyledHeader>
            <NavBar>
                <NavLinks>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/create-post">Создать пост</NavLink>
                    <NavLink to="/profile/user123">Профиль</NavLink>
                </NavLinks>
                <LogoutButton onClick={handleLogin}>Войти</LogoutButton>
            </NavBar>
        </StyledHeader>
    );
};

export default Header;
