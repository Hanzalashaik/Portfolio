import React from 'react';
// import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import Admin from "./admin/Admin.jsx"
import MainPage from './MainPage.jsx';
import AdminPage from './admin/AdminPage.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

export default function App() {

    const { authUser } = useAuthContext();
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                {/* <Route path='/admin' element={<Admin />} /> */}
                <Route path='/admin' element={authUser ? <Admin /> : <AdminPage />} />
            </Routes>
            <Toaster />
        </>
    );
}
