import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    text-align: center;
    padding: 100px 20px;
    height: 100%;
    width: 100%;
`;

const ErrorTitle = styled.h1`
    font-size: 80px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.primary || '#0070f3'};
`;

const ErrorMessage = styled.p`
    font-size: 24px;
    margin-bottom: 30px;
`;

const BackLink = styled(Link)`
    font-size: 18px;
    color: ${(props) => props.theme.colors.primary || '#0070f3'};
    text-decoration: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary || '#0070f3'};
    padding-bottom: 2px;

    &:hover {
        color: ${(props) => props.theme.colors.secondary || '#0050c0'};
        border-bottom-color: ${(props) => props.theme.colors.secondary || '#0050c0'};
    }
`;

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle>
            <ErrorMessage>Страница не найдена</ErrorMessage>
            <BackLink to="/">Вернуться на главную страницу</BackLink>
        </ErrorContainer>
    );
};

export default ErrorPage;
