import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators} from 'redux'
import { actions } from './../state'



const ButtonDecrease = () => {
  const dispatch = useDispatch()
  const {decrement} = bindActionCreators(actions ,dispatch)
    return (
    <button onClick={() => decrement(20)}>➖</button>
  )
}

export default ButtonDecrease