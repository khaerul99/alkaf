import React from 'react'
import Layout from '../../layout'

function AboutUS() {

    const CardData = [
        {
            img: '/assets/image/coffee1.jpg',
            label: '4 Jenis Susu yang Nikmat Dicampur dengan Kopi',
            text: 'Menghadirkan cita rasa pada kopi memang sudah menjadi tugas dari'
        },
        {
            img: '/assets/image/coffee1.jpg',
            label: '4 Jenis Susu yang Nikmat Dicampur dengan Kopi',
            text: 'Menghadirkan cita rasa pada kopi memang sudah menjadi tugas dari'
        },
        {
            img: '/assets/image/coffee1.jpg',
            label: '4 Jenis Susu yang Nikmat Dicampur dengan Kopi',
            text: 'Menghadirkan cita rasa pada kopi memang sudah menjadi tugas dari'
        },
        {
            img: '/assets/image/coffee1.jpg',
            label: '4 Jenis Susu yang Nikmat Dicampur dengan Kopi',
            text: 'Menghadirkan cita rasa pada kopi memang sudah menjadi tugas dari'
        },
    ]

    return (
        <>
            <Layout>
                <div className='px-[20px] md:px-[80px] py-[40px] mt-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className=''>
                            <div className='lg:h-[500px] lg:w-[500px] overflow-hidden'>
                                <img src="/assets/image/image1.png" alt="" className='object-cover h-full w-full' />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='py-[50px] flex flex-col gap-4'>
                                <div className='flex items-center gap-3 px-[20px]'>
                                    <div className='h-[2px] w-[18px] bg-black'></div>
                                    <h3>About Us</h3>
                                </div>

                                <h1 className='font-bold text-[46px]'>Our Story</h1>
                                <p className='text-[32px]'>Get to know about us, stores, environment, and people behind it!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-[20px] md:px-[80px] py-[80px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='flex flex-col gap-4 lg:px-20'>
                            <div className='flex items-center gap-3 px-[20px]'>
                                <div className='h-[2px] w-[18px] bg-black'></div>
                                <h3>Our Story</h3>
                            </div>
                            <h1 className='font-bold text-[50px] text-[#662549]'>Grind The Essentials</h1>
                        </div>
                        <div>
                            <div className='lg:px-20 flex flex-col gap-4'>
                                <p className='text-justify'>In a fast-paced world it is easy to lose sight of what truly matters. Fore provides a place of solace where people can simply slow down and enjoy a high-quality cup of coffee. This philosophy is reflected within our tagline.</p>
                                <p className='text-justify'>By utilizing the word ‘Grind’ which has a double meaning: ‘Grind’ as in the day-to-day hustle that people go through, and ‘Grind’ as a key step in the coffee making process, Fore inspires people to embrace life’s essentials in the midst of their busy lifestyles through each cup of coffee we serve.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-[20px] md:px-[80px] py-[80px]'>
                    <div className='relative flex flex-col lg:flex-row lg:justify-between md:items-center'>
                        <h2 className='font-bold text-[46px] absolute left-1 -top-5 text-gray-500 opacity-20'>Kuy News</h2>
                        <h2 className='font-bold text-[32px] relative text-[#662549] '>Kuy News</h2>
                        <p className='text-[#662549]'>Get the latest updates from Fore Coffee</p>
                    </div>
                    <div className='py-10'>
                        {/* card */}
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
                            {CardData.map((item) => (
                                <Card img={item.img} label={item.label} text={item.text} />
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#662549] text-white px-4 py-2 rounded-full hover:bg-[#F8F0E5] hover:text-[#662549] transition-all duration-200'>Read More</button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

const Card = ({ img, label, text }) => {
    return (
        <div className='flex flex-col gap-2 items-center overflow-hidden shadow-md rounded-md border hover:shadow-xl hover:scale-105 transition-all duration-200'>
            <div className='h-[200px] w-full overflow-hidden rounded-md'>
                <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
            <div className='px-4 flex flex-col gap-2 py-2'>
                <h2 className='font-medium'>{label}</h2>
                <p className='text-[14px] text-gray-400'>{text}</p>
            </div>
        </div>
    )
}

export default AboutUS