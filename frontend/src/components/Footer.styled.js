import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${(props) => props.theme.colors.backgroundDark || '#1c1c1e'};
    color: ${(props) => props.theme.colors.textLight || '#ffffff'};
    padding: 20px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const FooterText = styled.p`
    margin: 0;
    font-size: 14px;
`;

export const FooterNav = styled.nav`
    margin-top: 10px;

    a {
        color: ${(props) => props.theme.colors.textLight || '#ffffff'};
        margin: 0 10px;
        text-decoration: none;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
    }
`;
