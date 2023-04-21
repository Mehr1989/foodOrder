
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHome from '@/component/NavHome';
import Hero from '@/component/Hero';
import About from '@/component/About';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Cards from '@/component/Cards';
import Footer from '@/component/Footer';
import Menu from '@/component/category/Menu';
import FeedBack from '@/component/carousel/Feedback';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})

})
  return (
    <>
  
   <Hero />

   <About />
   <Cards />
   
   <Menu />
   <FeedBack />
   <Footer />
  
 
   



       

    
    </>
  )
}
