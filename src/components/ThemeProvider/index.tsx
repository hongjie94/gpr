"use client";

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProviderComponent } from "./types";

export const ThemeProvider: ThemeProviderProviderComponent = ({ children, ...props }) => {
  return( 
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
