import { createContext, useContext, useMemo, useState } from "react"

const AppStateContext = createContext({
  activePage: "dashboard",
})

const AppApiContext = createContext({
  changePage: (page: string) => { },
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

  const appApi = useMemo(() => {
    return {
      changePage: (page: string) => setActivePage(page),
    }
  }, [setActivePage])

  return (
    <AppStateContext.Provider
      value={{
        activePage: activePage,
      }}
    >
      <AppApiContext.Provider value={appApi}>{children}</AppApiContext.Provider>
    </AppStateContext.Provider>
  )
}

export { AppProvider, useAppStateContext, useAppApiContext } 
