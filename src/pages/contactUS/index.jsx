import React from 'react'
import Layout from '../../layout'

function ContactUs() {
    return (
        <>
            <Layout>
                <div className='px-[20px] md:px-[100px] py-[80px] '>
                    <div className='flex flex-col justify-center items-center mb-10'>
                        <h1 className='font-bold text-[32px]'>Contact Us</h1>
                        <p>Any question or remarks? Just write us a message!</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <div className='bg-gray-200 px-5 md:px-10 py-5 rounded-md'>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <h1 className='font-bold text-[32px] text-black'>Contact Information</h1>
                                    <p>Should you have any question or concern, you can reach us by filling out the contact form, calling us, coming to our office,  finding us on other social networks, or you can personal email us at :</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <a href="">089878786787</a>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <a href="">clajsc@gmail.com</a>
                                </div>
                                <div className='flex gap-3'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <a href="">Gedung Graha Ganesha, Lantai 1 Suite 120 & 130
                                        Jl. Hayam Wuruk No. 28, RT 014/ RW 001, Kelurahan Kebon Klapa, Kecamatan Gambir, Jakarta Pusat, DKI Jakarta</a>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 md:px-10'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col'>
                                    <label>Name</label>
                                    <input type="text" className='border-b border-gray-500 outline-none' />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Email</label>
                                    <input type="text" className='border-b border-gray-500 outline-none' />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Phone</label>
                                    <input type="text" className='border-b border-gray-500 outline-none' />
                                </div>
                                <div className='flex flex-col'>
                                    <label>message</label>
                                    <input type="area" className='border border-gray-500 outline-none h-20' />
                                </div>
                                <div className='flex justify-end'>
                                    <button className='bg-[#662549] text-white px-4 py-1 rounded-full'>send</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ContactUs