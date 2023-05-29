import { Navigate, useLocation } from "react-router-dom"

// Como props va a recibir al user autenticado y las rutas que va a renderizar

const AuthRoutes = ({user,component}) => {

    const location=useLocation()
  
    if(user) return component

    if (!user) return <Navigate to="/login" state={{prevRoute: location.pathname}}/>
    //En este caso mandamos la ruta previa a login para que después nos devuelva a donde estábamos
}

export default AuthRoutes
