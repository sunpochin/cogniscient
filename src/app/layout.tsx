/**
 * 根佈局 (Root Layout)
 * 這是整個應用程式的基礎佈局，所有頁面都會被包裹在這個元件中。
 * 主要職責是設定 HTML 的基本結構 (<html>, <body>), 載入全域 CSS,
 * 以及設定 MUI 主題 (Theme) 和 Viewport。
 */
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import './globals.css'

import muiTheme from '../../theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
