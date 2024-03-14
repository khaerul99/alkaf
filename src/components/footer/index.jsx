import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className=''>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 text-white'>
                <div>
                    <div>
                        <h1 className='text-[22px] font-semibold'>Alkaf</h1>
                        <p>Gamis Kurta Collection</p>
                        <div className='flex mt-5'>
                            <Link className='p-2 flex'><img src="/assets/icon/facebook.png" alt="" className='h-8 w-8 ' /></Link>
                            <Link className='p-2 flex'><img src="/assets/icon/instagram.png" alt="" className='h-8 w-8 ' /></Link>
                            <Link className='p-2 flex'><img src="/assets/icon/tik-tok.png" alt="" className='h-8 w-8 ' /></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-5'>
                        <Link className='font-medium'>Home</Link>
                        <Link className='font-medium'>Catalog</Link>
                        <Link className='font-medium'>About Us</Link>
                        <Link className='font-medium'>Contact Us</Link>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-medium'>Contact Us</h1>
                        <Link className='font-medium'>+62897687638763</Link>
                        <Link className='font-medium'>+2211-3323-6789</Link>
                        <Link className='font-medium'>Alkaf@gmail.com</Link>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='font-medium'>Find Us</h1>
                        <p className='font-medium'>baleendah, 17 First Street, 22000 </p>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />
        </section>
    )
}

export default Footer