// pages/product/[slug].tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Product } from '@/interface';
import { fetchProductBySlug } from '@/services/productBySlug';


interface Props {
  product: Product | null;
  error: string | null;
}

const ProductPage = ({ product, error }: Props) => {
  const router = useRouter();
  const { slug } = router.query;

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-600">Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img
          src={`/images/${product.images[0]}`}
          alt={product.title}
          className="w-full max-w-md rounded-lg mb-4"
        />
        <p className="text-lg font-medium mb-2">{product.description}</p>
        <p className="text-xl font-semibold">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  try {
    const product = await fetchProductBySlug(slug);
    return { props: { product, error: null } };
  } catch (error) {
    return { props: { product: null, error: 'Failed to load product' } };
  }
};

export default ProductPage;
