import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'


const store=configureStore()
console.log("Before Update",store.getState())

store.subscribe(()=>{
   console.log("After update",store.getState())
})

ReactDOM.render(
     <Provider store={store}>
        <BrowserRouter>
           <App />
        </BrowserRouter>
        </Provider>
     ,
  document.getElementById('root'))