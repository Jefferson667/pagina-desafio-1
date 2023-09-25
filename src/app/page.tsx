import Image from 'next/image'
import Link from 'next/link';

import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Fotobg from './components/fotobg'; 
import Card from './components/card';


export default function Home() {
  return (
    <>
      <Fotobg/>
      <Banner/>
      <Card img='/fe.jpg' title='ferrari'/>
      <Card img='/maserati.jpg' title='test'/>
      <Footer/>


      
    </>
  )
}

