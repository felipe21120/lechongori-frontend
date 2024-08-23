import { Gupter, Montserrat_Alternates, Roboto, } from 'next/font/google';






export const roboto = Roboto({ 
  subsets: ['latin'], weight: ['100', '300', '400'], 
});


export const titleFont = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['500', '700'],
});


export const specialTitle = Gupter({
  subsets: ['latin'],
  weight: ['500', '700'],
})