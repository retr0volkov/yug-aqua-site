'use client'

import '@/app/styles.css'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { atom, useRecoilState } from 'recoil'

let products: IProduct[] = [
    {
        id: 1,
        name: 'Супер мега товар 1',
        href: '/shop/1',
        price: '111₽',
        quantity: 1,
        imageSrc: '/shop/1/image.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Супер мега товар 2',
        href: '/shop/2',
        price: '222₽',
        quantity: 1,
        imageSrc: '/shop/2/image.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

interface IProduct {
    "id": number,
    "name": string,
    "href": string,
    "price": string,
    "quantity": number,
    "imageSrc": string,
    "imageAlt": string
}

export default async function CartElement() {
    const [open, setOpen] = useRecoilState(openState)   
    //await useProducts()
    return (
        <div>
            <button onClick={() => setOpen(true)} className='fixed z-5 rounded-full bg-gray-800 bottom-2 md:top-2 right-2 w-12 h-12 md:text-gray-300 md:hover:bg-gray-700 md:hover:text-white md:rounded-md'>
                <ShoppingCartIcon className='h-8 w-8 m-2 text-neutral-200'></ShoppingCartIcon>
            </button>
            <Dialog as="div" open={open} className="relative z-10" onClose={() => setOpen(false)}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">Корзина</Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {products.map((product) => (
                                                        <li key={product.id} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={product.imageSrc}
                                                                    alt={product.imageAlt}
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href={product.href}>{product.name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">{product.price}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Кол-во: {product.quantity}</p>

                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        >
                                                                            Удалить
                                                                            {/* УДАЛЕНИЕ ТУТ */}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Итого:</p>
                                            <p>333₽</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Цена является приблизительной, действительные цены уточняйте у менеджера</p>
                                        <div className="mt-6">
                                            <a
                                                href="/order/done"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                                Купить
                                            </a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                или{' '}
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Продолжить покупку
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

interface IData {
    "name": string,
    "description": string,
    "price": string,
    "id": number
}

// async function useProducts(){
//     const data: IData[] = await shopData()
//     const [cart, setCart]: [number[], any] = useRecoilState(cartState)
//     products = []
//     cart.forEach(element => {
//         const newProduct: IProduct = {
//             id: element,
//             name: data[element].name,
//             href: '/shop/'+element,
//             price: data[element].price,
//             quantity: 1,
//             imageSrc: '/shop/'+element+'/image.jpg',
//             imageAlt: data[element].name
//         }
//         products.push()
//     });
// }

const openState = atom({
    key: 'openState',
    default: false
})

export const cartState = atom({
    key: 'cartState',
    default: []
})