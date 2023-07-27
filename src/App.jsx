import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Search from './components/Search'
import FilmsList from './components/FilmsList'
import FilmDetails from './components/FilmDetails'
import Favorites from './components/Favorites'
import { main } from './redux/slice/filmsSlice'
import { useDispatch } from 'react-redux'
import './App.css'

function App() {
  

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/films' element={<FilmsList/>}/>
        <Route path='/films/:id' element={<FilmDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

const Header = () => {
  const dispatch = useDispatch();
  
  
  return (
    <div className='header'>
      <NavLink to='/'><button onClick={() => dispatch(main())}>Main</button></NavLink>
      <NavLink to='/favorites'><button>Favorites</button></NavLink>
    </div>
  )
}

export default App
