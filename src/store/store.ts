import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./reducers"

function saveToLocalStorage(state: TState) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem("persistantState", serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState")
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type TState = ReturnType<typeof rootReducer>
