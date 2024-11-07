// App.jsx
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import MainLayout from './layouts/MainLayout';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme.js';

// Страницы
import HomePage from './pages/HomePage';
import {GlobalStyles} from "./styles/globalStyles.js";
import ErrorPage from "./pages/ErrorPage.jsx";
// import PostPage from './pages/PostPage';
// import ProfilePage from './pages/ProfilePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import CreatePostPage from './pages/CreatePostPage';
// import SettingsPage from './pages/SettingsPage';
// import NotificationsPage from './pages/NotificationsPage';

// function PrivateRoute({ children }) {
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//     return isAuthenticated ? children : <Navigate to="/login" />;
// }

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                <Routes>
                    {/* Основные страницы с MainLayout */}
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                        {/*<Route path="/post/:id" element={<PostPage />} />*/}
                        {/*<Route path="/profile/:username" element={<ProfilePage />} />*/}

                        {/* Защищенные маршруты */}
                        {/*<Route*/}
                        {/*    path="/create-post"*/}
                        {/*    element={*/}
                        {/*        <PrivateRoute>*/}
                        {/*            <CreatePostPage />*/}
                        {/*        </PrivateRoute>*/}
                        {/*    }*/}
                        {/*/>*/}
                        {/*<Route*/}
                        {/*    path="/settings"*/}
                        {/*    element={*/}
                        {/*        <PrivateRoute>*/}
                        {/*            <SettingsPage />*/}
                        {/*        </PrivateRoute>*/}
                        {/*    }*/}
                        {/*/>*/}
                        {/*<Route*/}
                        {/*    path="/notifications"*/}
                        {/*    element={*/}
                        {/*        <PrivateRoute>*/}
                        {/*            <NotificationsPage />*/}
                        {/*        </PrivateRoute>*/}
                        {/*    }*/}
                        {/*/>*/}
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
