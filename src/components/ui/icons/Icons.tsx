import Image from "next/image";


type IconComponentProps = {
  iconName: string;
  altText: string;
  width?: number;
  height?: number;
  classname?: string
};

export const IconComponent: React.FC<IconComponentProps> = ({ iconName, altText, width , height, classname  }) => {
  return (
    <div className={ ` ${classname} `}>
      <Image 
      src={`/icons/${iconName}.png`} 
      alt={altText} 
      width={width} 
      height={height} 
      className="transition-all hover:opacity-75"
    />
    </div>
    
  );
};

