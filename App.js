import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuW_Dyy9gUxE3LuQQAUZPjojt9XiXr7t8",
  authDomain: "auth-dev-42e47.firebaseapp.com",
  projectId: "auth-dev-42e47",
  storageBucket: "auth-dev-42e47.appspot.com",
  messagingSenderId: "537435527083",
  appId: "1:537435527083:web:ba923f178282b4516e24ee"
};

 initializeApp(firebaseConfig);

const App =()=>{
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}  />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;