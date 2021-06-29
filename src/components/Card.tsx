import React from "react";
import { SquareIcon } from "./SquareIcon";

interface CardProps {
  id: string;
  themeName: string;
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  accentColor: string;
}

export function Card({
  id,
  themeName,
  backgroundColor,
  primaryTextColor,
  secondaryTextColor,
  accentColor
}: CardProps) {
  return (
    <li className='list-card' key={id}>
      <span><strong>Theme name:</strong> {themeName}</span>
      <span>
        <strong>Background color:</strong>
        <SquareIcon squareColor={backgroundColor}></SquareIcon> {backgroundColor}
      </span>
      <span>
        <strong>Primary text color:</strong>
        <SquareIcon squareColor={primaryTextColor}></SquareIcon> {primaryTextColor}
      </span>
      <span>
        <strong>Secondary text color:</strong>
        <SquareIcon squareColor={secondaryTextColor}></SquareIcon> {secondaryTextColor}
      </span>
      <span>
        <strong>Accent color:</strong>
        <SquareIcon squareColor={accentColor}></SquareIcon> {accentColor}
      </span>
      <div className="thumbnailPreview" style={{ background: backgroundColor, borderColor: accentColor }}>
        <span>Theme name: {themeName}</span>
        <p color={primaryTextColor}>Primary: Lorem ipsum sit dolor amet.</p>
        <p color={secondaryTextColor}>Secondary: Lorem ipsum sit dolor amet.</p>
      </div>
      <div className="remove-icon">X</div>
    </li>
  )
}