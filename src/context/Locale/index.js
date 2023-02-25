import React from 'react'
import { COUNTRY_CONSTANTS, LOCALE_STRINGS, REGIONS } from './constants'

const initialState = {
  strings: LOCALE_STRINGS[REGIONS.EN],
  constants: COUNTRY_CONSTANTS[REGIONS.EN],
}

const LocaleContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE': {
      return {
        ...state,
        strings: LOCALE_STRINGS[action.payload.region],
        constants: COUNTRY_CONSTANTS[action.payload.region],
      }
    }
    case 'RESET_LOCALE': {
      return {
        ...state,
        strings: LOCALE_STRINGS[REGIONS.EN],
        constants: COUNTRY_CONSTANTS[REGIONS.EN],
      }
    }
    default:
      return state
  }
}

export const LocaleProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <LocaleContext.Provider value={{ state, dispatch }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => React.useContext(LocaleContext)
