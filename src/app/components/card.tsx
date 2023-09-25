

interface CardPropsType {

    img:string
    title:string
}


export default function Card(props:CardPropsType) {
    return (

        <div>
            <img className='w-[300px]' src={props.img} alt="" />
            <div className='justify-center flex'>
            </div>
            {/* tudo que mexer aki sera mudado em todos os ussos desse componente */}
            {props.title}
        </div>
    )
}
