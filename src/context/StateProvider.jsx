import { createContext, useEffect, useState } from 'react'

export const StateContext = createContext();

const StateProvider = ({ children }) => {

  const [initialState, setInitialState] = useState({
    cli: false,
    github: false,
    mail: false,
    notes: false,
    pdf: false,
    sheryians: false,
    whatsapp: false,
    youtube: false,
    discord: false,
  });

  return (
    <StateContext.Provider value={[initialState, setInitialState]}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider