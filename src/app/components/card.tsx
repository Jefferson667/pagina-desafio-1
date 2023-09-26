import Image from "next/image"
import { text } from "stream/consumers"


interface CardPropsType {

    img: string
    title: string
}


export default function Card(props: CardPropsType) {
    return (

        <div className="hover:scale-[1.3] transition">
            <Image
                width={300}
                height={100}
                src={props.img}
                alt={"test"}
                className="h-[12em] w-auto"
            />

            <div className='justify-center flex'>
            </div>
            {/* tudo que mexer aki sera mudado em todos os ussos desse componente */}
            {props.title}
        </div>
    )
}
