import React from "react"
import { strings } from "../ts/constants"
import { Theme } from "../ts/interfaces"
import { Card } from "./Card"

interface CardListProps {
  data: Theme[] | null;
}

export function CardList({ data }: CardListProps) {
  return (
    <ul className='list-cards'>
      {(() => {
        if (data?.length) {
          return data.map(item =>
            <Card
              key={item.id}
              theme={item}
            />
          )
        } else {
          return (
            <li key={0}>{strings.THEME_NOT_FOUND}</li>
          )
        }
      })()}
    </ul>
  )
}