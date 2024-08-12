import Image from 'next/image';

interface Props {
  width: number;
  height: number;
  classname?: string
}

export const ImageLogo = ( {width, height, classname}:Props ) => {
  return (

    <div className={ ` ${classname} `} >
        <div className='flex justify-center items-center w-full h-auto'>
          <Image
            src= '/images/lechongori.jpg'
            alt='Logo'
            width={width}
            height={height}
          />
        </div>
    </div>
    
  )
}
