import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import StikyShop from '../components/stiky/StikyShop'

function Layout({ children }) {
    return (
        <section className='flex justify-center scroll-smooth relative '>
            <StikyShop/>
            <div className='w-full max-w-7xl'>
                <Navbar />
                <div className='w-full z-0 mt-16'>
                    {children}
                </div>
                <div className='px-[20px] md:px-[80px] py-[50px] bg-[#272829]'>
                    <Footer />
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default Layout