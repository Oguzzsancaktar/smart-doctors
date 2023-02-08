import React, { useEffect } from "react"
import { useAuthStateContext } from "../contexts/authContext"
import Router from "next/router"
import { selectAppRoute } from "../utils/appRouteUtils"

interface IProps {
  children: React.ReactNode
}

const AuthRouter = (Component: any) => {
  const AuthenticatedComponent = () => {
    const { loggedUser }: any = useAuthStateContext()

    useEffect(() => {
      if (!loggedUser) {
        Router.replace(selectAppRoute("login"))
      }
    }, [])

    return !!loggedUser ? <Component /> : null  // Render whatever you want while the authentication occurs
  }

  return AuthenticatedComponent
}

export default AuthRouter 
