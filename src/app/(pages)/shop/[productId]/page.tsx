import '@/app/styles.css'
import Image from 'next/image';
import Add from '@/components/add';

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

const data = [
    {
        "name": "Супер мега товар 1",
        "description": "Описание супер мега товара, побольше такое чтобы круто выглядело для демки",
        "price": "111₽",
        "id": 1
    },
    {
        "name": "Супер мега товар 2",
        "description": "Описание супер мега товара, побольше такое чтобы круто выглядело для демки",
        "price": "222₽",
        "id": 2
    },
    {
        "name": "Супер мега товар 3",
        "description": "Описание супер мега товара, побольше такое чтобы круто выглядело для демки",
        "price": "333₽",
        "id": 3
    }
]

export default async function Product({ params }: {
    params: { productId: number }
}) {

    // const getShop = async () => {
    //     const res = await fetch(process.env.SITE_URL + '/api/shop', { next: { revalidate: 10 } })
    //     return res.json()
    // }

    // const data: IData[] = await getShop()

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
                            <Add productId={params.productId - 1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}