import {useContext} from 'react';

import {CountContext} from '../context/CountContext'

function Counter() {
    const {count, setCount} = useContext(CountContext);

    return (
        <>
            <h1>
               Count: {count}
               <br />
               <button onClick={() => setCount(count + 1)}> Incrementar</button>
            </h1>
        </>
    )
}

export default Counter;