import '@/styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <body>
        <nav id="main-nav">
          <span>elliottgrov.es</span>
          <a>github</a>
          <a>linkedin</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
