import Link from 'next/link'

export const metadata = {
title: 'Заказать бассейн',
description: 'Краткое описание для поисковых движков',
}

export default function Example() {
    return (
        <form className='px-12 mb:px-24 xl:px-96'>
            <div className="border-b pt-12 border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Конфигурация</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Выберите конфигурацию бассейна, который вам необходим.
                </p>

                <div className="mt-10 space-y-10">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Тип бассейна</legend>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                id="overflow"
                                name="type"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="overflow" className="block text-sm font-medium leading-6 text-gray-900">
                                    Переливной
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                id="skim"
                                name="type"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="skim" className="block text-sm font-medium leading-6 text-gray-900">
                                    Скиммерный
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                id="idk"
                                name="type"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="idk" className="block text-sm font-medium leading-6 text-gray-900">
                                    ...
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Тип бассейна</legend>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                id="outside"
                                name="location"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="outside" className="block text-sm font-medium leading-6 text-gray-900">
                                    Наружний
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                id="inside"
                                name="location"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="inside" className="block text-sm font-medium leading-6 text-gray-900">
                                    Внутренний
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="length" className="block text-sm font-medium leading-6 text-gray-900">
                            Длина
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="length"
                                id="length"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="width" className="block text-sm font-medium leading-6 text-gray-900">
                            Ширина
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="width"
                                id="width"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="depth" className="block text-sm font-medium leading-6 text-gray-900">
                            Глубина
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="depth"
                                id="depth"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Дополнительные услуги</legend>
                        <div className="mt-6 space-y-6">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="stairs"
                                        name="stairs"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="stairs" className="font-medium text-gray-900">
                                        Ступени
                                    </label>
                                </div>
                            </div>
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="hydrodrop"
                                        name="hydrodrop"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="hydrodrop" className="font-medium text-gray-900">
                                        Гидромассаж
                                    </label>
                                    <p className="text-gray-500">Какая то информация про услугу</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            Допольнительная информация
                        </label>
                        <div className="mt-2">
                            <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Дополнительная информация, если необходимо.</p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-12 pt-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Личные данные</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Ваши личные данные для обратной связи</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Имя
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Фамилия
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Адрес электронной почты
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                Номер
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="number"
                                id="number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Адрес (включая город)
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 pb-12">
                <Link type="button" href="/" className="text-sm font-semibold leading-6 text-gray-900">
                Отмена
                </Link>
                <Link
                type="submit" href="/"
                className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Отправить
                </Link>
            </div>
        </form>
    )
}