export const metadata = {
    title: 'Связаться с нами',
    description: 'Краткое описание для поисковых движков',
  }

const people = [
    {
      name: 'Ганган Александр',
      role: 'Директор по обеспечению',
      number: '+7 (918) 288-87-89',
      imageUrl:
        '/portrets/1.png',
    },
    {
      name: 'Гевондян Артур',
      role: 'Технический директор',
      number: '+7 (922) 417-15-02',
      imageUrl:
        '/portrets/2.png',
    },
    {
      name: 'Гимп Максим',
      role: 'Директор по развитию',
      number: '+7 (964) 929-99-89',
      imageUrl:
        '/portrets/3.png',
    },
  ]
  
export default function Contact() {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Связаться с нами</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Какой либо текст для описания.
                    </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                            <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>
                            <p className="text-sm font-semibold leading-6 text-primary">{person.number}</p>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </>
    )
}