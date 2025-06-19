import { createStore } from 'redux'

// Define initial state
interface UserState {
  messages: string[]
  session: string
}

type UserAction =
  | { type: 'ADD_MESSAGE'; payload: string }
  | { type: 'SET_SESSION'; payload: string }

const initialState: UserState = {
  messages: [],
  session: '',
}

// Define reducers
function userReducer(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] }
    case 'SET_SESSION':
      return { ...state, session: action.payload }
    default:
      return state
  }
}

// Create store
export const store = createStore(userReducer)
