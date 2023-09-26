import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header className='flex justify-between items-center bg-black px-14 py-3'>
            <h1 className='text-3xl text-white font-bold'>
                <Link href='/'>
                    Ferrari
                </Link>
            </h1>

            <div className="hover:scale-[1.1]">
                <Link href='/carros'>
                    <Image
                    width={50}
                    height={50}
                    src="/ferrari.svg"
                    alt=""
                    />

                </Link>
            </div>

            <nav>
                <button className='text-[20px] text-white rounded-lg p-1 hover:border-b-2'>
                    Comprar
                </button>
            </nav>
        </header>
    )
}