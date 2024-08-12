import Link from 'next/link';
import { IconComponent } from '../../../../components/ui/icons/Icons';
import { ImageLogo } from '../../../../components/ui/imagen/ImageLogo';
import { SubTitle } from '../../../../components/ui/title/SubTitle';
import { Title } from '../../../../components/ui/title/Title';
import { FormBox } from './FormBox';


export const LoginBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative bg-white px-10 rounded-3xl shadow-2xl w-full max-w-md">
                <Link
                href="/"
                >
                    <IconComponent
                        iconName='close'
                        altText="Close"
                        width={30}
                        height={30}
                        classname="absolute top-6 right-6 cursor-pointer"
                    />
                </Link>
                
                <ImageLogo 
                    width={250}
                    height={250}
                    classname='h-60'
                />
                <Title 
                    title='Inicio de sesión'
                    className='text-2xl font-bold pb-3 text-center'
                />
                <SubTitle 
                    subtitle='Solo puede iniciar sesión el administrador'
                    classname='font-extralight text-sm pb-8 text-gray-500 text-center'
                />
                <FormBox />
            </div>
        </div>
    );
}
