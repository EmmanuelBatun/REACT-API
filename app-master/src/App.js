
import './App.css';
import React, {useState,useEffect} from "react";
import {API_URL} from '../src/API'
import axios from "axios";
import {Routes,Route} from 'react-router-dom'
import BooksList from './componets/BooksList';
import BookDetails from './componets/BookDetails';
import Favorites from './componets/Favorites';
import Navbar from './componets/navbar';
import Footer from './componets/Footer';
import { Login } from './componets/Login';
import { Register } from './componets/Register';
import { ProtectedRoute } from './componets/ProtectedRoute';
import { AuthProvider } from "./componets/context/AuthContext";

function App() {

  return (
    <div className="App">
      <AuthProvider>
     
      <Routes>
      <Route path="/" element={<Login />} />
          <Route
            path="/booklist"
            element={
              <ProtectedRoute>
                <Navbar/>
              <BooksList/>
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        <Route path='/book/:id' element={
          <ProtectedRoute>
            <Navbar/>
        <BookDetails/>
        </ProtectedRoute>
        }/>
        <Route path='/favorites' element={
          <ProtectedRoute>
            <Navbar/>
        <Favorites/>
        </ProtectedRoute>
        }/>
      </Routes>
      </AuthProvider>
    </div>
  );

          }
export default App;
