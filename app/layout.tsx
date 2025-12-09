import '@/styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <body className="z-1 bg-black text-white relative h-screen w-screen">
        <div className="absolute z-2 top-0 w-full h-full bg-[linear-gradient(to_right,#111_1px,#0000_1px),linear-gradient(to_bottom,#111_1px,#0000_1px)] bg-size-[24px_24px] "></div>
        <nav id="main-nav" className="mb-4">
          <span>elliottgrov.es</span>
          <a>github</a>
          <a>linkedin</a>
        </nav>
        <main className="max-w-2xl relative mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
