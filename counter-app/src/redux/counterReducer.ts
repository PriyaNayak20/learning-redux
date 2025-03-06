import { INCREMENT, DECREMENT, RESET } from './counterActions'

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

interface Action {
  type: string
}

const counterReducer = (state = initialState, action: Action): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    case RESET:
      return { count: 0 }
    default:
      return state
  }
}

export default counterReducer
