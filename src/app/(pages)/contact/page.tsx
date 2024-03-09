export const metadata = {
    title: 'Связаться с нами',
    description: 'Краткое описание для поисковых движков',
}


export default function Contact() {
    return (
        <>
            <div className="px-12 mb:px-64 xl:px-[30rem] pt-12">
                <div className="px-4 sm:px-0">
                    <h1 className="text-3xl font-semibold leading-7 text-gray-900">Связаться с нами</h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-base font-medium leading-6 text-gray-900">Наш номер телефона:</dt>
                            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">8 (909) 451-35-53</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-base font-medium leading-6 text-gray-900">Наша электронная почта:</dt>
                            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">yug-aqua@yandex.ru</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}