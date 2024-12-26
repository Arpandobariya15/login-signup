import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route  path='/books' element={<Books />}/>
                    <Route  path='/addBooks' element={<AddBooks />}/>
                </Routes>
                <Footer />
            </Router>

            
        </div>
    )
}

export default App
