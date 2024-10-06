import React from 'react';
import { LoginForm } from './components/login';
import { Menu } from './components/menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />}>  </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
