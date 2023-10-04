import Image from 'next/image'
import Hero from '@/Components/Hero'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Groups from '@/Components/Groups'
Header
export default function Home() {
  return (
    <div>
      <Header/>
       <Hero/>
       <Groups/>
       
       <Footer/>
    </div>
    
  )
}
