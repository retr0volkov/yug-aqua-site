import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';

export const metadata = {
    title: 'Пример работ',
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

const data = [
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

export default async function Example({ params }: {
    params: { exampleId: number }
}) {
    // const getExamples = async () => {
    //     const res = await fetch(process.env.SITE_URL + '/api/examples', { next: { revalidate: 10 } })
    //     return res.json()
    // }

    // const data: IData[] = await getExamples()

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            src={"/examples/" + params.exampleId + '/1.jpg'}
                            alt={"Картинка 1"}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={"/examples/" + params.exampleId + '/2.jpg'}
                                alt={"Картинка 2"}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={"/examples/" + params.exampleId + '/3.jpg'}
                                alt={"Картинка 3"}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={"/examples/" + params.exampleId + '/4.jpg'}
                            alt={"Картинка 4"}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 lg:col-span-2">
                        <div className="lg:col-span-3 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data[params.exampleId-1].name}</h1>
                        </div>

                        <div className="py-10 lg:col-span-3 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{data[params.exampleId-1].description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Главные моменты</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {data[params.exampleId-1].highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Заметки</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{data[params.exampleId-1].details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}