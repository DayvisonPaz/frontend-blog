import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Home from './home';
import Berserk from "./pages/berserk";
import Vagabond from "./pages/vagabond";
import { useState, useEffect } from 'react';
import axios from "axios";
import Vinland from "./pages/vinland";
function App() {
  const pages: { [key: string]: JSX.Element } = {
    "Berserk": <Berserk />,
    "Vagabond": <Vagabond />,
    "Vinland": <Vinland />
  };
  
  const [posts,setPosts] = useState([{"route":String,"post":Number}]);
  useEffect(() => {
    
    
    async function run(){
       
    await axios.get('https://backend-vagante.onrender.com/posts').then(response=>setPosts(response.data.posts))
  
  
  }
  run()
}, []);
    
  const myroutes = posts.map((e)=><Route path={`/${e.route}`} key={e.post as unknown as string}  element={pages[`${e.route}`] } />)
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'   element={<Home data={{posts}} />} />
    {myroutes}
    <Route path='/berserk' element={<Berserk></Berserk>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
