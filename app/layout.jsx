import './globals.css'
import './fonts.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import { Commands } from '@/components/command'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HueCraft',
  description: 'A website to test out new design fonts, colors and templates!',
  image: 'https://git-abdul.github.io/huecraft/favicon.png',
  url: "https://git-abdul.github.io/huecraft",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta content="https://git-abdul.github.io/huecraft/favicon.png" property="og:image" />
        <meta content="#ff8400" data-react-helmet="true" name="theme-color" />
        <link rel="icon" href="favicon.png" type='png' sizes="any" />
      </head>
      <body className="bg-light dark:bg-dark select-none">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className='select-none'>
            {children}
          </div>
          <Commands />
        </ThemeProvider>
      </body>
    </html>
  )
}
