import './globals.css'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/themes';

export default function App({ Component, pageProps }) {

  return (
    <main>
      <AppCacheProvider {...pageProps}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps} />
          </ThemeProvider>
      </AppCacheProvider>
    </main>
  )

}