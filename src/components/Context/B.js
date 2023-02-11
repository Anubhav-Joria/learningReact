// USING CONTEXT HOOK
import React, {useContext} from 'react';
import { UserConsumer } from './CreateContext';
import C from './C'
function B() {

  const userName = useContext(UserConsumer);
  return (
    <div>
        <C/>{ userName}
    </div>
  )
}

export default B