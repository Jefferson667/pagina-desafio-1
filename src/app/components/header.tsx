export default function Header() {
    return (
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
    )
  }