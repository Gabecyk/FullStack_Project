import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import CreatPost from './pages/CreatPost';
import Post from './pages/Post';

function App() {

  

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/creatapost"> Create a Post</Link>
          <Link to="/"> Home Page</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/creatapost" element={<CreatPost/>}/>
          <Route path="/post/:id" element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App; //exportação
