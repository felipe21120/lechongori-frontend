interface SeedProduct {
    productDescription: string;
    productImages: string[];
    productSlug: string;
    productTitle: string;
    productPrice: number;
    productType: ValidTypes;
}

type ValidTypes = 'lechona'|'tamal'|'empanadas'|'carne'|'sancocho'|'costillas';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            productDescription: "Lechona",
            productImages: [
                'oficial-lechona.jpg',
            ],
            productSlug: "lechona-lechongori",
            productPrice: 100,
            productType: 'lechona',
            productTitle: "Lechona",
        },

        {
            productDescription: "tamal",
            productImages: [
                'oficial-lechona.jpg',
            ],
            productSlug: "tamal-lechongori",
            productPrice: 100,
            productType: 'tamal',
            productTitle: "Tamal",
        },

        {
            productDescription: "Carne a la llanera",
            productImages: [
                'oficial-lechona.jpg',
            ],
            productSlug: "carne-lechongori",
            productPrice: 100,
            productType: 'carne',
            productTitle: "Carne",
        },

        {
            productDescription: "arroz",
            productImages: [
                'oficial-lechona.jpg',
            ],
            productSlug: "arroz-lechongori",
            productPrice: 100,
            productType: 'empanadas',
            productTitle: "Arroz",
        },

        {
            productDescription: "Lechona",
            productImages: [
                'oficial-lechona.jpg',
            ],
            productSlug: "lechona-lechongori",
            productPrice: 100,
            productType: 'sancocho',
            productTitle: "Lechona",
        },

        {
            productDescription: "Lechona",
            productImages: [
                'oficial-lechona.jpg',
            ],
            productSlug: "lechona-lechongori",
            productPrice: 100,
            productType: 'costillas',
            productTitle: "Lechona",
        },

    ]
}