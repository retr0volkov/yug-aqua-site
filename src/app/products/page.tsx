export const metadata = {
    title: 'Наши услуги',
    description: 'Краткое описание для поисковых движков',
  }

const products = [
    {
      id: 1,
      name: 'Название услуги',
      imageSrc: '/product/1.jpg',
      imageAlt: "Бассейн",
      desc: 'Краткое описание',
    },
    {
      id: 1,
      name: 'Еще одна услуга',
      imageSrc: '/product/2.jpg',
      imageAlt: "Еще один бассейн",
      desc: 'Другое описание',
    },
  ]

export default function Products() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Мы предоставляем следующие услуги:</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <p>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </p>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }