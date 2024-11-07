// src/layouts/MainLayout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useSelector} from 'react-redux';
import LoginModal from '../components/LoginModal';
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const MainLayout = ({children}) => {

    // const showLoginModal = useSelector((state) => state.auth.showLoginModal);
    const MainContainer = styled.div`
        width: 100vw;
        height: 100%;
    `

    const ContentContainer = styled.div`
        display: flex;
        height: 100%;
        width: 100vw;
    `

    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <Outlet/>
            </ContentContainer>
            <Footer/>
            {/*{showLoginModal && <LoginModal />}*/}
        </MainContainer>
    );
};

export default MainLayout;
