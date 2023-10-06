import './globals.css'
import './fonts.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import { Commands } from '@/components/command'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HueCraft • Dev',
  description: 'A website to test out new design fonts, colors and templates!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" type='png' sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
