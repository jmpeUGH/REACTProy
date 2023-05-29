import { useContext } from "react"
import MyContext from "../shared/MyContext"

const Profile = () => {
//const Profile = ({user}) => {
  const {user,setUser} = useContext(MyContext)
  return (
    <>
      <h1>Perfil de usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  )
}

export default Profile
