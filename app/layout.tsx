import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}
const font = Nunito({
  subsets:["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
        </body>
    </html>
  )
}
