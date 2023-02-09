import { createContext, useContext, useMemo, useState } from "react"

const AppStateContext = createContext({
  activePage: "dashboard",
  sideDrawerContent: null,
})

const AppApiContext = createContext({
  changePage: (page: string) => { },
  changeSideDrawerContent: (content: JSX.Element[] | JSX.Element | null) => { },
})

const useAppStateContext = () => {
  const context = useContext(AppStateContext)

  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider")
  }

  return context
}

const useAppApiContext = () => {
  const context = useContext(AppApiContext)

  if (!context) {
    throw new Error("useAppApiContext must be used within a AppProvider")
  }

  return context
}

const AppProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState("dashboard")
  const [sideDrawerContent, setSideDrawerContent] = useState<JSX.Element[] | JSX.Element | any>(null)

  const appApi = useMemo(() => {
    return {
      changePage: (page: string) => setActivePage(page),
      changeSideDrawerContent: (content: JSX.Element[] | JSX.Element | null) => setSideDrawerContent(content),
    }
  }, [setActivePage])

  return (
    <AppStateContext.Provider
      value={{
        activePage,
        sideDrawerContent,
      }}
    >
      <AppApiContext.Provider value={appApi}>{children}</AppApiContext.Provider>
    </AppStateContext.Provider>
  )
}

export { AppProvider, useAppStateContext, useAppApiContext } 
