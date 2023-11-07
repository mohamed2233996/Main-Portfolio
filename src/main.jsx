import React from 'react'

// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.css";
// Import all of Bootstrap's JS
import "bootstrap/dist/js/bootstrap.js";
import * as bootstrap from 'bootstrap'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { DarkModeProvider } from "@rbnd/react-dark-mode"

import { useEffect, useState } from 'react';
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <DarkModeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DarkModeProvider>
  </Provider>
)



