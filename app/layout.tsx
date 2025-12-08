export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <body>
        <nav id="main-nav">
          <span>elliottgrov.es</span>
        </nav>
        {children}
      </body>
    </html>
  )
}
