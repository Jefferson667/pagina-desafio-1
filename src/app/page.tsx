import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <p></p>
      <header className='flex justify-between items-center bg-black px-14 py-3'>
        <h1 className='text-3xl text-white font-bold'>
          Ferrari
        </h1>

        <div>
          <a href="/carros">
            <img className='w-[50px]' src="https://store.ferrari.com/ytos/resources/FERRARI/release21/icons/ferrari-logo-white.svg" alt="" />
          </a>
        </div>

        <nav>
          <button className='text-[20px] text-white rounded-lg p-1 hover:border-b-2'>
            Comprar
          </button>
        </nav>
      </header>

      <section className='h-screen bg-[url("https://images.unsplash.com/photo-1596449560029-25e1bac915d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] bg-cover bg-center'>
      </section>

      <section className='bg-black'>
        
        <h1 className='text-[100px] text-center text-white'>
          Motor v8         
        </h1>
                
        <div className='flex justify-evenly items-center space-x-2'>
          <div>
            <img className='w-[400px]' src="https://allthecars.files.wordpress.com/2014/02/ferrari-california-t-2.jpg" alt="" />
            <span className='text-white justify-center flex'>
              motor com 400cv  
            </span>
          </div>

          <div>
            <img className='w-[300px] h-[250px]' src="https://www.autoracing.com.br/wp-content/uploads/2010/11/f1-freio-ferrari.jpg" alt="" />
            <div className='text-white justify-center flex' >
              freios super fortes de titanio
            </div>
          </div>

          <div>
            <img className='w-[300px] h-[240px]' src="https://store.ferrari.com/product_image/17411127376041519/D/w3840.jpg" alt="" />
            <div className='text-white flex justify-center' >
              interior em couro legitimo
            </div>
          </div>
        </div>

        <span className='text-[20px] p-3 w-full text-center text-white mt-5'>
          venha sentir a adrenalina das estradas
        </span>
      </section>

      <section className='flex bg-black justify-center space-x-5'>

        <img className='w-[300px]' src="https://static.vecteezy.com/ti/vetor-gratis/p3/20499860-ferrari-marca-logotipo-carro-simbolo-com-nome-projeto-italiano-automovel-ilustracao-com-preto-fundo-gratis-vetor.jpg" alt="" />
        <Image 
          className='w-[250px]' 
          src="/maserati.jpg" 
          width={450}
          height={450}
          alt="maserati logo" 
        />       
        
      </section>

      <footer className='flex justify-evenly text-white text-xl pb-3 bg-black'>
        <div> 
          <h1>
          numero
          </h1>
          <p>
            981237126
          </p>
        </div>

        <div>

          <h1>
            nome
          </h1>

          <p>
            jefferson
          </p>
   
        </div>

        <div>
          <h1>
            email
          </h1>

          <p>
            jeffersonconta@gmail.com
          </p> 
        </div>
      </footer>

    </>
  )
}

