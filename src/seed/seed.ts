interface SeedProduct {
    productDescription: string;
    productImage: string[];
    productSlug: string;
    productTitle: string;
    productPrice: number;
    type: ValidTypes;
    sizes: ValidSizes[];
}

type ValidTypes = 'lechona' | 'tamal' | 'tamal_lechona' | 'carne' | 'sancocho' | 'costillas';
type ValidSizes = 'lechona' | 'tamal' | 'tamal_lechona' | 'carne' | 'sancocho' | 'costillas';

interface SeedData {
    categories: string[];
    products: SeedProduct[];
}




export const initialData: SeedData = {


    categories: [
        'lechona', 'tamal', 'tamal_lechona', 'carne', 'sancocho', 'costillas'
    ],

    products: [
        {
            productDescription: "Disfruta nuestra deliciosa lechona tolimense: cerdo asado, jugoso y relleno de arroz y especias, con piel crujiente y un sabor inigualable. ¡Perfecto para compartir en cualquier ocasión especial!",
            productImage: [
                'oficial-lechona.jpg',
            ],
            sizes: ['lechona', 'tamal', 'tamal_lechona', 'carne', 'sancocho', 'costillas'],
            productSlug: "lechona-tolimense-lechongori-ibague",
            productPrice: 12.000,
            type: 'lechona',
            productTitle: "Lechona",
        },

        {
            productDescription: "Prueba nuestro exquisito tamal tolimense: una masa de maíz rellena de carne de cerdo, pollo, huevo, papas y especias, envuelto en hojas de plátano y cocido al vapor. ¡Un sabor auténtico y tradicional!",
            productImage: [
                'tamal-lechongori.jpg',
            ],
            sizes: ['lechona', 'tamal', 'tamal_lechona', 'carne', 'sancocho', 'costillas'],
            productSlug: "tamal-tolimense-lechongori-ibague",
            productPrice: 10.000,
            type: 'tamal',
            productTitle: "Tamal",
        },

        {
            productDescription: "Saborea nuestra deliciosa carne a la llanera: cortes de res asados a la perfección sobre brasas, marinados con especias locales para un sabor único y jugoso. ¡Ideal para los amantes de la parrilla!",
            productImage: [
                'carne-llanera-lechongori.jpg',
            ],
            sizes: ['lechona', 'tamal', 'tamal_lechona', 'carne', 'sancocho', 'costillas'],
            productSlug: "carne-tolimense-lechongori-ibague",
            productPrice: 14.000,
            type: 'carne',
            productTitle: "Carne a la llanera",
        },

        {
            productDescription: "Disfruta lo mejor de la tradición con nuestro plato de tamal y lechona: cerdo jugoso con piel crujiente acompañado de un tamal tolimense relleno de carnes y especias, todo en un solo plato lleno de sabor auténtico. ¡Perfecto para cualquier ocasión!",
            productImage: [
                'tamal-lechona-lechongori.jpg',
            ],
            sizes: ['lechona', 'tamal', 'tamal_lechona', 'carne', 'sancocho', 'costillas'],
            productSlug: "tamalconlechona-tolimense-lechongori-ibague",
            productPrice: 12.000,
            type: 'tamal_lechona',
            productTitle: "Tamal con lechona",
        },

        {
            productDescription: "Deléitate con nuestro sancocho tradicional: un caldo reconfortante con carne, plátano, yuca, papa y mazorca, lleno de sabores colombianos. ¡Ideal para disfrutar en familia y celebrar lo mejor de nuestra cocina!",
            productImage: [
                'sancocho-lechongori.jpg',
            ],
            sizes: ['lechona', 'tamal', 'tamal_lechona', 'carne', 'sancocho', 'costillas'],
            productSlug: "sancocho-tolimense-lechongori-ibague",
            productPrice: 12.000,
            type: 'sancocho',
            productTitle: "Sancocho",
        },

        {
            productDescription: "Prueba nuestras irresistibles costillas a la BBQ: tiernas, jugosas y bañadas en una salsa barbacoa ahumada, asadas a la perfección. ¡El plato ideal para los amantes de los sabores intensos y la buena parrilla!",
            productImage: [
                'costillas-bbq-lechongori.jpg',
            ],
            sizes: ['lechona', 'tamal', 'tamal_lechona', 'carne', 'sancocho', 'costillas'],
            productSlug: "costillasbbq-tolimense-lechongori-ibague",
            productPrice: 15.000,
            type: 'costillas',
            productTitle: "Costillas",
        },

    ]
}