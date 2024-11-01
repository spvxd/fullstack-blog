import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Стилизованный контейнер для хедера
export const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.light || '#bbbbbb'};
    padding: 10px 0;
    display: flex;
    width: 100%;
    justify-content: center;
`;

// Стилизованная навигация
export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

// Стилизованные ссылки
export const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

// Стилизованный компонент Link из react-router-dom
export const NavLink = styled(Link)`
    color: ${(props) => props.theme.colors.textDark || '#333333'};
    text-decoration: none;
    margin: 0 15px;
    font-size: 16px;

    &:hover {
        text-decoration: underline;
    }
`;

// Стилизованная кнопка выхода
export const LogoutButton = styled.button`
    background: none;
    border: 1px ${(props) => props.theme.colors.textDark || '#333333'};
    border-radius: 5px;
    color: ${(props) => props.theme.colors.textDark || '#333333'};
    font-size: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
