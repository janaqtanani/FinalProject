//import logo from './logo.svg';
import Navbar from './Nav';
import Blog from './blog';
import Register from './register';
import Login from './login';
import Home from './Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"





function App() {
  return (
    <div class="App">
    <Navbar></Navbar>
    <BrowserRouter>

    <Routes>
    
    <Route
                            exact
                            path="/Home"
                            element={<Home/>}
                        ></Route> 
                                
                         <Route
                            exact
                            path="/login"
                            element={<Login/>}
                        ></Route>  
                      <Route
                            exact
                            path="/register"
                            element={<Register/>}
                        ></Route>  
                         <Route
                            exact
                            path="/blog"
                            element={<Blog/>}
                        ></Route> 
                    </Routes>
                
            
</BrowserRouter>
   </div>
  );
}

export default App;