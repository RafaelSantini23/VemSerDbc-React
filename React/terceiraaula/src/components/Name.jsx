import {useContext} from 'react';

import {NameContext} from '../context/NameContext';

function Name() {
  const {name, setName} = useContext(NameContext)
  return (
      <h1>
          {name}
          <input type="text" onChange={(e) => setName(e.target.value)}/>
      </h1>
  )
}

export default Name;