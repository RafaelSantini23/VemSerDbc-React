import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SidebarLogin } from "./Header.styles";
import Menu from "../menu/Menu"



function Header() {

  const {isToken} = useContext<any>(AuthContext)

  return (
    <>
    { isToken && (
    <SidebarLogin>
      <Menu />
    </SidebarLogin>)}
    </>
  )
}

export default Header