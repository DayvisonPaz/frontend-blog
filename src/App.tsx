import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Home from './home';
import Berserk from "./pages/berserk";
import Vagabond from "./pages/vagabond";


function App() {
  const pages: { [key: string]: JSX.Element } = {
    "Berserk": <Berserk />,
    "Vagabond": <Vagabond />,
  };
   var posts = [{
    _id: ('651ef5c208acb22a54779b5f'),
    title: 'A beleza em Berserk',
    About: 'Como se pode encontrar beleza mesmo em ambientes sombrios como berserk',
    post: 0,
    tumb: 'https://i.pinimg.com/564x/3a/5f/9f/3a5f9f92ca7a64fcd2443838f6f61e3c.jpg',
    route: 'Berserk'
  },
  {
    _id: ('6522fdf6e651cbb5a6d5868f'),
    title: 'A beleza em Vagabond',
    About: 'Como se pode encontrar beleza mesmo em ambientes violentos como de vagabond',
    post: 1,
    tumb: 'https://i.pinimg.com/564x/63/e4/d0/63e4d083de128a2df20ba6ddc0f830f5.jpg',
    route: 'Vagabond'
  },{
    _id: ('651ef5c208acb22a54779b5f'),
    title: 'A beleza em Berserk',
    About: 'Como se pode encontrar beleza mesmo em ambientes sombrios como berserk',
    post: 0,
    tumb: 'https://i.pinimg.com/564x/3a/5f/9f/3a5f9f92ca7a64fcd2443838f6f61e3c.jpg',
    route: 'Berserk'
  },
  {
    _id: ('6522fdf6e651cbb5a6d5868f'),
    title: 'A beleza em Vagabond',
    About: 'Como se pode encontrar beleza mesmo em ambientes violentos como de vagabond',
    post: 1,
    tumb: 'https://i.pinimg.com/564x/63/e4/d0/63e4d083de128a2df20ba6ddc0f830f5.jpg',
    route: 'Vagabond'
  },{
    _id: ('651ef5c208acb22a54779b5f'),
    title: 'A beleza em Berserk',
    About: 'Como se pode encontrar beleza mesmo em ambientes sombrios como berserk',
    post: 0,
    tumb: 'https://i.pinimg.com/564x/3a/5f/9f/3a5f9f92ca7a64fcd2443838f6f61e3c.jpg',
    route: 'Berserk'
  },
  {
    _id: ('6522fdf6e651cbb5a6d5868f'),
    title: 'A beleza em Vagabond',
    About: 'Como se pode encontrar beleza mesmo em ambientes violentos como de vagabond',
    post: 1,
    tumb: 'https://i.pinimg.com/564x/63/e4/d0/63e4d083de128a2df20ba6ddc0f830f5.jpg',
    route: 'Vagabond'
  },{
    _id: ('651ef5c208acb22a54779b5f'),
    title: 'A beleza em Berserk',
    About: 'Como se pode encontrar beleza mesmo em ambientes sombrios como berserk',
    post: 0,
    tumb: 'https://i.pinimg.com/564x/3a/5f/9f/3a5f9f92ca7a64fcd2443838f6f61e3c.jpg',
    route: 'Berserk'
  },
  {
    _id: ('6522fdf6e651cbb5a6d5868f'),
    title: 'A beleza em Vagabond',
    About: 'Como se pode encontrar beleza mesmo em ambientes violentos como de vagabond',
    post: 1,
    tumb: 'https://i.pinimg.com/564x/63/e4/d0/63e4d083de128a2df20ba6ddc0f830f5.jpg',
    route: 'Vagabond'
  }]
  // const [posts,setPosts] = useState([])
  // useEffect(() => { run()
  //   async function run(){
       
  //   await axios.get('http://localhost:3000/').then(response=>setPosts(response.data))
  
  
  // }}, []);
    
  const myroutes = posts.map((e)=><Route path={`/${e.route}`} key={e.post}  element={pages[`${e.route}`] } />)
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'   element={<Home data={{posts}} />} />
    {myroutes}
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
