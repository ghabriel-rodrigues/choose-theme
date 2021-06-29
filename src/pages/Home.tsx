import React from "react";
import { Button } from "../components/Button";
import { CardList } from "../components/CardList";
import '../styles/home.scss'

export function Home() {
  const tempThemes = [
    {
      id: '1',
      themeName: 'Ausar',
      backgroundColor: '#000000',
      primaryTextColor: '#000000',
      secondaryTextColor: '#000000',
      accentColor: '#000000'
    },
    {
      id: '2',
      themeName: 'Maat',
      backgroundColor: '#000000',
      primaryTextColor: '#000000',
      secondaryTextColor: '#000000',
      accentColor: '#000000'
    },
    {
      id: '3',
      themeName: 'Heru',
      backgroundColor: '#000000',
      primaryTextColor: '#000000',
      secondaryTextColor: '#000000',
      accentColor: '#000000'
    },
  ];

  return (
    <main>
      <div className='page-home'>
        <header>
          <h1>Select or make your own theme!</h1>
          <form>
            <input
              type='text'
              placeholder='Search the theme'
            />
          </form>
        </header>
        <section>
          <Button>CREATE</Button>
        </section>
        <section>
          <CardList data={tempThemes}></CardList>
        </section>
      </div>
    </main>
  )
}