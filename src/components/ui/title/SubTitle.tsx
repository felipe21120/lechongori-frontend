

interface Props {
  subtitle?: string;
  subtitle2?: string
  classname?: string;
}



export const SubTitle = ( {subtitle, subtitle2, classname}:Props ) => {
    return (
        <div className={ ` ${classname} `} >
            <h2>
              <span className='block mb-2'>
                {subtitle}
              </span>

              <span className='block text-red-500 text-2xl'>
                {subtitle2}
              </span>
              
            </h2>
        </div>
      );
}
