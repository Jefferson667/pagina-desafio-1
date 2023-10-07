import Image from 'next/image'
import Link from 'next/link';
import Pagina2Card from '../components/pagina2card';
import Card from '../components/card';

export default function Home() {
  return (
    <>
      <section>
        <Pagina2Card png="/ferrari.png"/>
      </section>
    </>
  )
}

