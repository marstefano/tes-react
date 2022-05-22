import React from 'react'

export default function Button({text, clickText}) {
  return <button onClick={clickText}>{text}</button>
}
