import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'

function App() {
  const counter = useSelector (state => state.counter)
  const isLogged = useSelector (state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      {isLogged ? <h3>Valuable information!!!!!!!!?!?!?</h3> : '' }
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>Add 5</button>
      
    </div>
  );
}

export default App;
