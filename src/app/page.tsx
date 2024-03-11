import ".//styles.css"
import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/menu"

export const metadata = {
  title: 'Юг-Аква',
  description: 'Краткое описание для поисковых движков',
}

export default function Example() {
  return (
    <html>
      <main>
        <Image className="mx-auto mt-0" height={720} width={1280} src={'/img/title1.png'} alt="YUG_AQUA full screen logo"></Image>
        <div className="mx-0"><Menu /></div>
        <Image className="mx-auto mb-0" height={1280} width={912} src={'/img/title2.jpg'} alt="YUG_AQUA contact info"></Image>
        <div className="text-center text-xl mb-2">
          <p>Индивидуальный предприниматель Ганган Александр Сергеевич</p>
          <p>8 (909) 451-35-53</p>
          <p>yug-aqua@yandex.ru</p>
        </div>
      </main>
    </html>
  )
}