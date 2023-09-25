import Image from "next/image"
import Card from "../components/card"

export let descricaoMotor = "motor v8 com 8 bicos injetores de alta perfomace "
export let interioremcouro = "couro legitimo"
export let freio = "freio de titanio pinças em carbono"


export default function Banner() {
    return (

        <section className='bg-black'>
            <h1 className='text-[100px] text-center text-white'>
            Motor v8 
            </h1>
            
            <div className='flex items-center space-x-2 text-white'>

                <div className='mt-3'>
                    <img className='w-[300px]' src="https://www.autoracing.com.br/wp-content/uploads/2010/11/f1-freio-ferrari.jpg" alt="" />
                    <div className='text-white justify-center flex' >
                        {freio}
                    </div>
                </div>

                <Card img='/fe.jpg' title='ferrari'/>
                

                <div>
                    <img className='w-[300px] h-[250px]' src="https://store.ferrari.com/product_image/17411127376041519/D/w3840.jpg" alt="" />
                    <div className='text-white flex justify-center' >
                    {interioremcouro}
                    </div>
                </div>
                    
                
            </div>

            <div className="text-[20px] p-3 w-full text-center items-center flex flex-col text-white">

                <Image
                    width={200}
                    height={200}
                    src={"/ferrari.png"}
                    alt="ferrari"
                />
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