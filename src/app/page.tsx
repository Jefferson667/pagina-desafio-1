import Image from 'next/image'
import Link from 'next/link';

import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Fotobg from './components/fotobg';

export default function Home() {
  return (
    <>
      <Header/>
      <Fotobg/>
      <Banner/>
      <Footer/>
    </>
  )
}

