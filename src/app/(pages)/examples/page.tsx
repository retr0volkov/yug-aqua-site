export const metadata = {
  title: 'Примеры наших работ',
  description: 'Краткое описание для поисковых движков',
}

interface IData {
  "id": number,
  "name": string,
  "shortdesc": string,
  "description": string,
  "highlights": string[],
  "details": string
}

const callouts = [
  {
      "id": 1,
      "name": "Это название работы 1",
      "shortdesc": "Краткое описание",
      "description": "Описание проделанной на объекте работы",
      "highlights": [
          "Список основных моментов по поводу работы",
          "Пример 1",
          "Пример 2",
          "Пример 3"
      ],
      "details": "Краткое замечание или отметка в конце страницы"
  },
  {
      "id": 2,
      "name": "Это название работы 2",
      "shortdesc": "Краткое описание",
      "description": "Описание проделанной на объекте работы",
      "highlights": [
          "Список основных моментов по поводу работы",
          "Пример 1",
          "Пример 2",
          "Пример 3"
      ],
      "details": "Краткое замечание или отметка в конце страницы"
  },
  {
      "id": 3,
      "name": "Это название работы 3",
      "shortdesc": "Краткое описание",
      "description": "Описание проделанной на объекте работы",
      "highlights": [
          "Список основных моментов по поводу работы",
          "Пример 1",
          "Пример 2",
          "Пример 3"
      ],
      "details": "Краткое замечание или отметка в конце страницы"
  }
]

export default async function Examples() {

  // const getExamples = async () => {
  //   const res = await fetch(process.env.SITE_URL + '/api/examples', { next: { revalidate: 10 } })
  //   return res.json()
  // }

  // const callouts: IData[] = await getExamples()

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Наши работы</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={'/examples/' + callout.id + '/1.jpg'}
                    alt={callout.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={'/examples/' + callout.id}>
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