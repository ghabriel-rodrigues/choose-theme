import { useState } from "react"
import { strings } from "../ts/constants"
import { Theme } from "../ts/interfaces"

export default function Edit(theme: Theme) {
  const [themeCreated, setThemeCreated] = useState<Theme>(theme)

  function handleSubmit() {
    // setThemeCreated(FormData())
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="creating-theme">
        <span className="visually-hidden">{strings.EDIT}</span>
      </label>
      <input
        id='creating-theme'
        type='text'
        placeholder={strings.THEME_NAME}
        value={''}
        onInput={(e) => (e.target as HTMLInputElement).value}
      />
      <input
        id='creating-theme-bg'
        type='text'
        placeholder={strings.BACKGROUND_COLOR}
        value={''}
        onInput={(e) => (e.target as HTMLInputElement).value}
      />
      <input
        id='creating-theme-primary-color'
        type='text'
        placeholder={strings.PRIMARY_TEXT_COLOR}
        value={''}
        onInput={(e) => (e.target as HTMLInputElement).value}
      />
      <input
        id='creating-theme-secondary-color'
        type='text'
        placeholder={strings.SECONDARY_TEXT_COLOR}
        value={''}
        onInput={(e) => (e.target as HTMLInputElement).value}
      />
      <input
        id='creating-theme-accent-color'
        type='text'
        placeholder={strings.ACCENT_COLOR}
        value={''}
        onInput={(e) => (e.target as HTMLInputElement).value}
      />
    </form >)
}