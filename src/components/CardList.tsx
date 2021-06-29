import React from "react"
import { Card } from "./Card"

interface CardListProps {
  data: any[] //@TODO: It would be good to create a type for that data.
}

export function CardList({ data }: CardListProps) {
  return (
    <ul className='list-cards'>
      {(() => {
        if (data.length) {
          return data.map(item =>
            <Card
              id={item.id}
              themeName={item.themeName}
              backgroundColor={item.backgroundColor}
              primaryTextColor={item.primaryTextColor}
              secondaryTextColor={item.secondaryTextColor}
              accentColor={item.accentColor}
            ></Card>
          )
        } else {
          return (
            <li>There is no theme registered.</li>
          )
        }
      })()}
    </ul>
  )
}