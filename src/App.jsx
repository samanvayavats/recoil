import { RecoilRoot, useRecoilValue } from "recoil";
import './app.css'
import { useRecoilState } from "recoil";
import { counterAtom  , decrementAtom ,countSelector} from "./state/atom.js";

const App = () => {
  return (
    <RecoilRoot>
      {/* {console.log('is the state for the parent is changing or not ')} */}
      <Hithere>this the use of the atom using the recoil</Hithere>
      <Counter />
      <Hithere>this the use of the atom using the recoil</Hithere>
      <DecCounter/>
      <Hithere>this the use of the selector using the recoil</Hithere>
      <UseSelector/>
    </RecoilRoot>
  );
};

const Hithere = ({children  })=>{
  return (<b>
    {/* {console.log('the state for is not changing i guess ')} */}
    {children }
  </b>)
}

const Counter = () => {
  const [count, setCount] = useRecoilState(counterAtom);

  const increment = () => setCount(count => count + 1);

  return (
    <div>
      {count}
      <button onClick={increment}>Click Me</button>
    </div>
  );
};

const DecCounter = ()=>{
  const [dec , setdec] = useRecoilState(decrementAtom)
  const decrement = ()=>{
    setdec( dec => dec-1)
  }

  return (
    <div>
      {dec}
      <button onClick={decrement}>Click Me</button>
    </div>
  );
}


const UseSelector  = ()=>{
  const value = useRecoilValue(countSelector)

  return (<Hithere>
    {console.log('the value is ', value)}
    <br />
    the use of the selector {value}
  </Hithere>)
}

export default App;
