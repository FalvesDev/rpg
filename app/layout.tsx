import Footer from '@/src/components/Footer'
import NavBar from '@/src/components/NavBar'
import './globals.css'

export const metadata = {
  title: 'RPG',
  description: 'Um RPG feito com carinho por Felipe Alves',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-r from-red-500 to-pink-600 text-black h-screen">
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
