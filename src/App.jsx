
import Form from './Form'
import './App.css'
import Login from './Login'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'


function App() {
  

  return(
  
<BrowserRouter>
<Routes>
<Route path="/home" element={<Home/>}/>
  <Route path="/" element={<Form/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Form/>}/>
</Routes>
</BrowserRouter>



  )
}

export default App
