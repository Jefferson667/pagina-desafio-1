import Image from "next/image"
import { text } from "stream/consumers"


interface CardPropsType {

    img: string
    title: string
}


export default function Card(props: CardPropsType) {
    let user = {
        name:"Rom",
        age:12
    }

    return (

        <div className="hover:scale-[1.1] transition">
            <Image
                width={300}
                height={100}
                src={props.img}
                alt={"test"}
                className="h-[12em] w-auto"
            />
            <h1 className='justify-center flex'>
            {props.title}
            </h1>
            {/* tudo que mexer aki sera mudado em todos os ussos desse componente */}
            
        </div>
    )
}
