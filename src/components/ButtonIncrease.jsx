import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators} from 'redux'
import { actions } from './../state'


const ButtonIncrease = () => {
  const dispatch = useDispatch()
  const {increment} = bindActionCreators(actions, dispatch)
  return (
    <button onClick={() => increment(20)}>➕</button>
  )
}

export default ButtonIncrease