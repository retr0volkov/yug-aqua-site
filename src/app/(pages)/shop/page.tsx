import { promises as fs } from 'fs';
import '@/app/styles.css'
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Наши товары',
    description: 'Краткое описание для поисковых движков',
}

interface IData {
    "name": string,
    "description": string,
    "price": string,
    "id": number
}

export default async function Shop() {
    const file = await fs.readFile(process.cwd() + '/public/shop/shop.json', 'utf8');
    const data: IData[] = JSON.parse(file);
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Наши товары</h2>
                    <h6 className="text-lg">Цена является приблизительной, уточняйте цены у менеджера</h6>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={"/shop/" + product.id + '/image.jpg'}
                                        alt={'Image for ' + product.name}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    ></Image>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link href={'/shop/' + product.id}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </Link>
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}