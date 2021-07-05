import React from "react"
import { Link } from "react-router-dom"
import { strings } from "../ts/constants"
import { Theme } from "../ts/interfaces"
import { Button } from "./Button"
import { SquareIcon } from "./SquareIcon"

interface CardProps {
  theme: Theme
}

export function Card({
  theme
}: CardProps) {
  return (
    <li key={theme.id} className='list-card'>
      <span><strong>{strings.THEME_NAME} {theme.id}:</strong> {theme.themeName}</span>
      <span>
        <strong>{strings.BACKGROUND_COLOR}:</strong>
        <SquareIcon squareColor={theme.backgroundColor}></SquareIcon> {theme.backgroundColor}
      </span>
      <span>
        <strong>{strings.PRIMARY_TEXT_COLOR}:</strong>
        <SquareIcon squareColor={theme.primaryTextColor}></SquareIcon> {theme.primaryTextColor}
      </span>
      <span>
        <strong>{strings.SECONDARY_TEXT_COLOR}:</strong>
        <SquareIcon squareColor={theme.secondaryTextColor}></SquareIcon> {theme.secondaryTextColor}
      </span>
      <span>
        <strong>{strings.ACCENT_COLOR}:</strong>
        <SquareIcon squareColor={theme.accentColor}></SquareIcon> {theme.accentColor}
      </span>
      <div className="thumbnailPreview" style={{ background: theme.backgroundColor, borderColor: theme.accentColor }}>
        <p>{strings.THEME_NAME}: {theme.themeName}<br /><br /></p>
        <p style={{ color: theme.primaryTextColor }}>{strings.PRIMARY_TEXT_COLOR}</p>
        <p style={{ color: theme.secondaryTextColor }}>{strings.SECONDARY_TEXT_COLOR}</p>
        <p style={{ color: theme.accentColor }} > {strings.ACCENT_COLOR}</p>
      </div>
      <div>
        <div><Button>{strings.SELECT}</Button></div>
        <Link to={`/edit-theme?id=${theme.id}`}><Button>{strings.EDIT}</Button></Link>
        <div><Button>{strings.REMOVE}</Button></div>
      </div>
    </li >
  )
}