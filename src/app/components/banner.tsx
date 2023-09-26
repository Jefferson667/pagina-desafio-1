import Image from "next/image"
import Card from "../components/card"

export let descricaoMotor = "motor v8 com 8 bicos injetores de alta perfomace "
export let interior = "couro legitimo"
export let freio = "freio de titanio pinças em carbono"


export default function Banner() {
    return (

        <section className='bg-black'>
            <h1 className='text-[100px] text-center text-white'>
            Motor v8 
            </h1>
            
            <div className='flex justify-evenly space-x-2 text-white'>
                <Card img="/freio.jpg" title={freio} />
                <Card img='/fe.jpg' title='ferrari'/>
                <Card img="/interior.webp" title={interior}/>
            </div>

            <div className="text-[20px] p-3 w-full text-center items-center flex flex-col text-white">

                <Card img="/ferrari.png" title=""/>
                <span>
                venha sentir a adrenalina das estradas
                </span>
            </div>

            <div className='text-[20px] p-3 w-full text-center text-white'>
            power street
            </div>

        </section>
    
        
     )
    }