import logo from './logo.svg';
import './App.css';
import { increment , decrement, incrementvalue, decrementvalue } from './app/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispach = useDispatch();
  let [amount , setamount] = useState('');
  return (
    <div className="App">     
      <h1> COUNT :- {count}</h1>
      <input type='number' value={amount} onChange={(e) => setamount(e.target.value)}></input>
      <button onClick={() => dispach(increment())}> + </button>
      <button onClick={() => dispach(decrement())}> - </button><br></br>
      <button onClick={() => dispach(incrementvalue(Number(amount)))}> Add </button>
      <button onClick={() => dispach(decrementvalue(Number(amount)))}> Remov </button>

    </div>
  );
}

export default App;
