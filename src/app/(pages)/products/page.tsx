export const metadata = {
    title: 'Наши услуги',
    description: 'Краткое описание для поисковых движков',
  }

const products = [
    {
      id: 1,
      name: 'Создание бассейнов под ключ',
      imageSrc: '/product/1.jpg',
      imageAlt: "Бассейн",
      desc: 'ЮГ-АКВА может взять на себя все этапы создания бассейна, от проектирования до монтажа оборудования и сдачи объекта заказчику',
    },
    {
      id: 2,
      name: 'Проектирование бассейнов',
      imageSrc: '/product/2.jpg',
      imageAlt: "Еще один бассейн",
      desc: 'Специалисты ЮГ-АКВА помогут выбрать оптимальный размер и форму бассейна, а также разработают проект его размещения на участке',
    },
    {
      id: 3,
      name: 'Строительство бассейнов',
      imageSrc: '/product/3.jpg',
      imageAlt: "Еще один бассейн",
      desc: 'Наша компания может выполнить все работы по созданию бассейна, начиная от земляных работ и заканчивая установкой оборудования',
    },
    {
      id: 4,
      name: 'Обслуживание бассейнов',
      imageSrc: '/product/4.jpg',
      imageAlt: "Еще один бассейн",
      desc: 'После сдачи объекта в эксплуатацию наша компания может предложить услуги по регулярному техническому обслуживанию и чистке бассейнов',
    },
    {
      id: 5,
      name: 'Ремонт бассейнов',
      imageSrc: '/product/5.jpg',
      imageAlt: "Еще один бассейн",
      desc: 'В случае возникновения каких-либо проблем с бассейном специалисты ЮГ-АКВА проведут комплексное обследование Вашего бассейна и оборудования для выявления причины образования данной проблемы с последующим её устранением',
    },
    {
      id: 6,
      name: 'Продажа оборудования для бассейнов',
      imageSrc: '/product/6.jpg',
      imageAlt: "Еще один бассейн",
      desc: 'Наша компания является одним из ведущих представителей в России оборудования для бассейнов, мы не только продаем, но и обсуживаем свои системы фильтрации, автодозации, насосы, обогреватели и т.д.',
    },
    {
      id: 7,
      name: 'Ландшафтный дизайн',
      imageSrc: '/product/7.jpg',
      imageAlt: "Еще один бассейн",
      desc: 'Специалисты нашей компании могут помочь в создании гармоничного дизайна участка, где будет расположен бассейн',
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
                <div className="aspect-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
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