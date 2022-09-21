import React from 'react'
import { useSelector } from 'react-redux'

const Text = () => {
  const balance= useSelector(state => state.numberReducer)
  return (
    <p>Your Current Balance is: {balance}</p>
  )
}

export default Text