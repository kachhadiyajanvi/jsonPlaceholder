import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Post from './component/Post';
import Home from './Home';
import Comments from './component/Comment';
import Album from './component/Album';
import Photo from './component/Photo';
import Todos from './component/Todos';
import Users from './component/Users';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home></Home> } />
        <Route path="/Post" element={ <Post></Post> } />
        <Route path="/Comments" element={ <Comments></Comments> } />
        <Route path="/Album" element={ <Album></Album> } />
        <Route path="/Photo" element={ <Photo></Photo> } />
        <Route path="/Todos" element={ <Todos></Todos> } />
        <Route path="/Users" element={ <Users></Users> } />
      </Routes>
    </div>
  );
}

export default App;
