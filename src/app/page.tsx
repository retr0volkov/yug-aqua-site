import ".//styles.css"
import Link from "next/link"
import Menu from "@/components/menu"

export const metadata = {
  title: 'Юг-Аква',
  description: 'Краткое описание для поисковых движков',
}

export default function Example() {
  return (
    <html>
      <main>
        <div className="bg-white overflow-clip">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-clip blur-sm sm:-top-80"
              aria-hidden="true"
            >
              <div className="blur-3xl">
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }} />
              </div>
              <img className="relative top-20 md:-top-40 opacity-30 md:opacity-100 left-1/3 md:left-[calc(50%+15rem)] rotate-12"
                src="/img/logobig.png"></img>
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                  Юг-Аква - строительство и обслуживание бассейнов
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Текст - краткое описание предприятия
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/examples"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Наши работы
                  </Link>
                  <Link href="/order" className="text-sm font-semibold leading-6 text-gray-900">
                    Оформить заявку <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 right-0 left-0">
        <Menu />
      </div>
    </html>
  )
}