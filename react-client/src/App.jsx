import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.module.scss'
import s from './App.module.scss'
import ss from './index.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Button} from "@mui/material";
import DefaultPage from "../components/pages/DefaultPage.jsx";
import PageTwo from "../components/pages/Page2.jsx";


function App() {
    return (
            <Routes>
                <Route path="*" element={<DefaultPage />} />
                <Route path="/two" element={<PageTwo />} />
            </Routes>
    );
}

export default App
