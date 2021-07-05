import React from "react"
import { Link } from "react-router-dom"
import { strings } from "../ts/constants"

interface ButtonProps {
  children: string;
}

export function CreateButton({ children }: ButtonProps) {
  function handleClick() {

  }
  return (
    <>
      <label htmlFor="section-create-button">
        <span className="visually-hidden">{strings.CREATE_NEW_THEME}</span>
      </label>
      <Link to="/create-theme/"><button id="section-create-button" onClick={handleClick}>{children}</button></Link>
    </>
  )
}

export function Button({ children }: ButtonProps) {
  return (
    <button>{children}</button>
  )
}