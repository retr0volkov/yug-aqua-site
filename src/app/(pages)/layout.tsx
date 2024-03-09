import ".//..//styles.css"
import Menu from "@/components/menu"


export default function MenuLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <html className="min-h-full" lang="ru">
        <Menu></Menu>
        <main>
          <div className="">{children}</div>
        </main>
      </html>
    </>
  )
}
