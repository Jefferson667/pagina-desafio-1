import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='flex justify-between items-center bg-blue-500'>

        <h1 className='text-[300%] m-[20px]'>
          TXT
        </h1>

        <nav>
          <button className='text-[200%] m-[30px]'>
            Entrar
          </button>
        </nav>

      </header>

      <section className='flex justify-center flex-col items-center'>
        <Image
          src="/logo.jpg"
          width={380}
          height={200}
          alt="Picture of the author"
        />
        <h1 className='text-[100px]'>
          deu boa
        </h1>

        <div className='text-[20px] bg-orange-400 p-3 w-full text-center'>
          Testanto o desconhecido
        </div>

        <div className='text-[20px]  bg-yellow-300 p-3 w-full text-center'>
          Em busca do novo
        </div>
      </section>

      <footer className='text-[50px] bg-gray-300'>
        <h1>
          Contato:
        </h1>
      </footer>

    </>
  )
}

