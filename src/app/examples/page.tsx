export const metadata = {
    title: 'Примеры наших работ',
    description: 'Краткое описание для поисковых движков',
  }

const callouts = [
    {
      name: 'Работа 1',
      description: 'Пример карточки портфолио',
      imageSrc: '/examples/1/1.jpg',
      imageAlt: 'Бассейн 1',
      href: '/examples/test',
    },
    {
      name: 'Работа 2',
      description: 'Еще один пример',
      imageSrc: '/examples/2/1.jpg',
      imageAlt: 'Бассейн 2',
      href: '/examples/test',
    },
    {
      name: 'Работа 3',
      description: 'Третий пример',
      imageSrc: '/examples/3/1.jpg',
      imageAlt: 'Бассейн 3',
      href: '/examples/test',
    },
  ]

  export default function Examples() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Наши работы</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }