import Image from 'next/image'

export default function Home() {
    return (
        <main className='flex justify-center items-center container min-h-screen'>
            {/*QR Component*/}
            <section>
                <div className='max-w-sm bg-white rounded-2xl'>
                    <div className='p-4'>
                        <Image
                            src='/images/image-qr-code.png'
                            className='w-full h-full object-cover object-center drop-shadow-md rounded-xl'
                            alt='QR code'
                            width='500'
                            height='500'
                            sizes='100vw'
                        />
                    </div>
                    <div className='pt-5 pb-9 px-7'>
                        <h1 className='pb-4 font-bold text-2xl text-dark_blue'>
                            Improve your front-end <br />
                            skills by building projects
                        </h1>
                        <p className='text-[1.05rem] text-grayish_blue'>
                            Scan the QR code to visit Frontend
                            <br />
                            Mentor and take your coding skills to
                            <br />
                            the next level
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
