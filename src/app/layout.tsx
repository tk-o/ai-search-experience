import './globals.scss'

export const metadata = {
  title: 'AISEE',
  description: 'Artificial Intelligence Search Engine Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
