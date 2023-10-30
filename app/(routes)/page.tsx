import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: "true" });
  const data = await getBillboard("b5c2dd5c-12b0-4232-a174-09a3013c2d39");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={data} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
