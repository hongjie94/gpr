import { FunctionComponent, PropsWithChildren } from "react"

interface ThemeProviderProviderProps {
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
}

export type ThemeProviderProviderComponent = FunctionComponent<PropsWithChildren<ThemeProviderProviderProps>>

