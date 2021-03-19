import React,{useEffect} from 'react';
import logo from './logo.svg';
import Routes from './routes/Routes'
import {HttpInterceptor} from './HttpInterceptor'


function App() {

  useEffect(() => {
     HttpInterceptor();
    return () => {
      
    };
  }, [])

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
