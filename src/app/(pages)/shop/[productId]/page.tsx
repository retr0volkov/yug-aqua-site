import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import Image from 'next/image';
import '@/app/styles.css'
import Link from 'next/link';

export const metadata = {
    title: 'Пример работ',
    description: 'Краткое описание для поисковых движков',
}

interface IData {
    "name": string,
    "description": string,
    "price": string,
    "id": number
}

export default async function Example({ params }: {
    params: { productId: number }
}) {
    const file = await fs.readFile(process.cwd() + '/public/shop/shop.json', 'utf8');
    const data: IData[] = JSON.parse(file);
    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="aspect-1 overflow-hidden rounded-lg lg:block">
                        <Image
                            width={1000}
                            height={1000}
                            src={"/shop/" + params.productId + '/image.jpg'}
                            alt={"Картинка 1"}
                            className="h-full w-full object-cover object-center"
                        ></Image>
                    </div>
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-3 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data[params.productId - 1].name}</h1>
                            <p className="text-3xl tracking-tight text-gray-900">{data[params.productId - 1].price}</p>
                        </div>

                        <div className="py-10 lg:col-span-3 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{data[params.productId - 1].description}</p>
                                </div>
                            </div>
                            <Link href={'/shop'} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Добавить в корзину
                            </Link>
                            {/* ВСТАВИТЬ РЕДУКС ТУТ */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}