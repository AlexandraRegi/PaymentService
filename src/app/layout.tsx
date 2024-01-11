import type { Metadata } from 'next'
import { Montserrat, Nunito } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import { GlobalStyle } from '@/globals'


const mont = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', })


export const metadata: Metadata = {
  title: 'Payment Service',
  description: 'Service for transfer of monetary value',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mont.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
