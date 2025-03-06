import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/counterActions'

const Counter = () => {
  const count = useSelector((state: { count: number }) => state.count)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
