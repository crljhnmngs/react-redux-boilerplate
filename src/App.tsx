import React from 'react';
import { Header } from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Counter } from './components/Counter';

function App() {
    return (
        <div role="main" className="h-screen w-screen">
            <Header />
            <Counter />
            <ToastContainer />
        </div>
    );
}

export default App;
