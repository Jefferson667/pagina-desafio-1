import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <>
     <section>
        <Image
            width={500}
            height={500}
            src={"/carros.jpg"}
            alt='ops'
        ></Image>

         
     </section>
      
    </>
  )
}

