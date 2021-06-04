import React from 'react'
import classes from './Input.module.css'


export const Input = ({config}) => {

  const inputType = config.type || 'text'
  const id = config.id || `default-${Math.random()}`
  let cls = []
  if(inputType === 'text'){
    cls = [classes.Input]
  } else if(inputType === "radio"){
    cls = [classes.InputRadio]
  }

  let inputCls = ""

  if (!config.isValid && inputType === 'text') {
    cls.push(classes.invalid)
    inputCls = classes.InputInValid
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={id}>{config.label}
      <input
        type={inputType}
        id={id}
        value={config.value}
        onChange={config.onChange}
        name={config.name}
        className={inputCls}
      />
      </label>
      {
        config.isValid
          ? null
          : <span>{config.errorMessage}</span>
      }
    </div>
  )
}

