import { createGlobalStyle } from "styled-components"
import { Theme } from "../ts/interfaces"

const ThemeWrapper = createGlobalStyle`
  body {
    background: ${({ backgroundColor }: Theme) => backgroundColor};
    color: ${({ primaryTextColor }: Theme) => primaryTextColor};
    transition: all 0.50s linear;
  }

  button.btn {
    background-color: ${({ accentColor }: Theme) => accentColor};
    color: ${({ primaryTextColor }: Theme) => primaryTextColor};
  }
`;

export function ThemeContainer(theme: Theme) {
  return (
    <ThemeWrapper
      id={theme.id}
      themeName={theme.themeName}
      backgroundColor={theme.backgroundColor}
      primaryTextColor={theme.primaryTextColor}
      secondaryTextColor={theme.secondaryTextColor}
      accentColor={theme.accentColor}
    ></ThemeWrapper>
  )
}
