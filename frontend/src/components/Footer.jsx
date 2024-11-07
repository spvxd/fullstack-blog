import React from 'react';
import { StyledFooter, FooterText, FooterNav } from './Footer.styled';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterText>© 2024 Fullstack Blog. Все права защищены.</FooterText>
            <FooterNav>
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Условия использования</a>
            </FooterNav>
        </StyledFooter>
    );
};

export default Footer;
