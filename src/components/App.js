//import logo from '../images/logo.svg';
import '../styles/App.css';
import Home from "./Home/Home"
import NotFound from './NotFound';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Login from "./Login/Login"
import CharacterDetail from "./Character/CharacterDetail"
import { useState } from 'react';
import Profile from './Profile/Profile';
import AuthRoutes from './AuthRoutes/AuthRoutes';
import RegisterUser from './User/RegisterUser';
import MyContext from "./shared/MyContext"


//AQUÍ VOY A CREAR EL ARRAY FAKE DE USUARIOS

const userList = [
  { email: "anacleto@agentesecreto.es", password: "a123", name: "Anacleto" },
  { email: "barbie@fatalwomen.com", password: "b123", name: "Barbie" },
  { email: "nancy@fatalwomen.com", password: "n123", name: "Nancy" }
]

function App() {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)


  const [loginError, setLoginError] = useState("")// es un string vacío para comunicar el error



  const [registerDup, setRegisterDup] = useState("")

  const registerNewUser = (newUser) => {
    const userExist = userList.find((user) => newUser.email === user.email)
    if (!userExist) {
      userList.push(newUser)
      setUser(newUser)
      //console.log(userList)
      navigate("/")
    }
    else {
      setRegisterDup("Este email ya está registrado")
    }

  }

  const logoutUser = () => {
    setUser(null)
    navigate("/")
  }

  const loginUser = (formData, prevRoute) => {

    const existsUser = userList.find((user) => user.email === formData.email && user.password === formData.password)

    if (existsUser) {
      setUser(existsUser)
      setLoginError("")
      navigate(prevRoute || "/")//Debe ser la última linea de código
    }
    else {
      setUser(false)
      setLoginError("Usuario o contraseña incorrecta")
    }

  }


  return (

    <MyContext.Provider value={{user,setUser}}>

      <div className="App-header">

        <NavBar user={user} logoutUser={logoutUser} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personaje/:id" element={<AuthRoutes user={user} component={<CharacterDetail user={user} />} />} />
          <Route path="/login" element={<Login loginUser={loginUser} loginError={loginError} />}></Route>
          <Route path="/*" element={<NotFound />} />
          <Route path="/profile" element={<AuthRoutes user={user} component={<Profile user={user} />} />} />
          <Route path="/register" element={<RegisterUser registerNewUser={registerNewUser} registerDup={registerDup} />} />
        </Routes>
      </div>
    </MyContext.Provider>

  );
}

export default App;
