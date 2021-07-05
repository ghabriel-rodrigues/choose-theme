import { strings } from "../ts/constants";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="header-search">
        <span className="visually-hidden">{strings.SEARCH_THEMES}</span>
      </label>
      <input
        id='header-search'
        type='text'
        placeholder={strings.SEARCH_YOUR_THEME}
        value={searchQuery}
        onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
      />
    </form >
  )
}