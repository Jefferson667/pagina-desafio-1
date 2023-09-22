import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <>
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
        
        <div className='flex items-center space-x-2'>

          <div>
            <img className='w-[400px]' src="https://allthecars.files.wordpress.com/2014/02/ferrari-california-t-2.jpg" alt="" />
            <div className='text-white justify-center flex'>
            motor com 400cv  
          </div>
          
        </div>

          <div className='mt-3'>
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

        <div>
          <img src="data:image/png;base64,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" alt="" />
          
        </div>

        <div className='text-[20px] p-3 w-full text-center text-white'>
          venha sentir a adrenalina das estradas
        </div>

        <div className='text-[20px] p-3 w-full text-center text-white'>
          power street
        </div>

        </section>
      <footer className='flex justify-evenly text-white text-xl bg-black'>
      
        
        
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

