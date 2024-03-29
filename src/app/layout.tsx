'use client'

import "./styles.css"

export default function MenuLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <html className="min-h-full" lang="ru">
        <main>
          <div className="">{children}</div>
        </main>
      </html>
    </>
  )
}
