interface SeedProduct {
    description: string;
    images: string[];
    slug: string;
    title: string;
    price: number;
    type: ValidTypes;
}

type ValidTypes = 'lechona'|'tamal'|'empanadas'|'carne'|'sancocho'|'costillas';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "Lechona",
            images: [
                'oficial-lechona.jpg',
            ],
            slug: "lechona-lechongori",
            price: 100,
            type: 'lechona',
            title: "Lechona",
        },

        {
            description: "tamal",
            images: [
                'oficial-lechona.jpg',
            ],
            slug: "tamal-lechongori",
            price: 100,
            type: 'tamal',
            title: "Tamal",
        },

        {
            description: "Carne a la llanera",
            images: [
                'oficial-lechona.jpg',
            ],
            slug: "carne-lechongori",
            price: 100,
            type: 'carne',
            title: "Carne",
        },

        {
            description: "arroz",
            images: [
                'oficial-lechona.jpg',
            ],
            slug: "arroz-lechongori",
            price: 100,
            type: 'empanadas',
            title: "Arroz",
        },

        {
            description: "Lechona",
            images: [
                'oficial-lechona.jpg',
            ],
            slug: "lechona-lechongori",
            price: 100,
            type: 'sancocho',
            title: "Lechona",
        },

        {
            description: "Lechona",
            images: [
                'oficial-lechona.jpg',
            ],
            slug: "lechona-lechongori",
            price: 100,
            type: 'costillas',
            title: "Lechona",
        },

    ]
}