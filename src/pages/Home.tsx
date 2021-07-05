import React, { useState } from "react"
import { useFetch } from "../hooks/useFetch"

// Components
import { CreateButton } from "../components/Button"
import { CardList } from "../components/CardList"
import { Search } from "../components/Search"

// References, Structures, Styling
import { FETCH_URL, strings } from "../ts/constants"
import { Theme } from "../ts/interfaces"
import '../styles/home.scss'

export default function Home() {
  const { isLoading, data, error } = useFetch(FETCH_URL)
  const [searchQuery, setSearchQuery] = useState('')

  const filterPosts = (themes: Theme[], query: string) => {
    if (!query) {
      return themes
    }

    if (themes) {
      return themes.filter((theme: Theme) => {
        const themeName = theme.themeName.toLowerCase()
        return themeName.includes(query.toLowerCase())
      })
    } else {
      return []
    }
  }

  const filteredPosts = filterPosts(data, searchQuery)

  return (
    <main>
      <div className='page-home'>
        <header>
          <h1>{strings.HOME_H1}</h1>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>
        <section>
          <CreateButton>{strings.CREATE}</CreateButton>
        </section>
        <section>
          {
            isLoading ? `...${strings.LOADING}` :
              <CardList data={filteredPosts}></CardList>
          }
        </section>
      </div>
    </main>
  )
}