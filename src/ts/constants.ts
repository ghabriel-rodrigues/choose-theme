export const strings = {
  CREATE: 'CREATE',
  CREATE_NEW_THEME: 'Create a new theme',
  SEARCH_THEMES: 'Search themes',
  SEARCH_YOUR_THEME: 'Search your theme',
  THEME_NAME: 'Theme name',
  THEME_NOT_FOUND: 'Theme not found.',
  HOME_H1: 'Select or make your own theme!',
  LOADING: 'loading data',
  PRIMARY_TEXT_COLOR: 'Primary text color',
  SECONDARY_TEXT_COLOR: 'Secondary text color',
  ACCENT_COLOR: 'Accent color',
  BACKGROUND_COLOR: 'Background color',
  SELECT: 'Select',
  EDIT: 'Edit',
  REMOVE: 'Remove'
}

export const routes = {
  home: '/',
  themes: '/themes/',
  createTheme: '/create-theme/',
  editTheme: '/edit-theme/',
}

//@TODO: the server url should be placed in a .env file [process.env.SERVER_URL]
export const SERVER_URL = `http://localhost:3000`
export const FETCH_URL = `${SERVER_URL}${routes.themes}`

