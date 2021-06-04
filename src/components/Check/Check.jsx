import React from 'react'
import classes from './Check.module.css'


export const Check = ({config}) => {
  const type = config.type || 'checkbox'
  let cls = [classes.Check]

  if(config.type === 'radio'){
    cls = [classes.Radio]
  }

  return (
    <div className={cls.join(' ')}>
      <input id={config.id} type={type} onChange={config.onChange} name={config.name}></input>
      <label htmlFor={config.id}>{config.label}</label>
    </div>
  )
}
