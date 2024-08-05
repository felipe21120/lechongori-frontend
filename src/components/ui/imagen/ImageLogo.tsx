import Image from 'next/image';

export const ImageLogo = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto'>
        <Image
          src= '/images/lechongori.jpg'
          alt='Logo'
          width={400}
          height={400}
        />
    </div>
  )
}
