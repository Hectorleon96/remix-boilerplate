import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@vercel/remix";
import { Button } from "~/components/button";
import { ErrorTemplate } from "~/components/errorTemplate";
import { ProductTemplate } from "~/components/product";
import { productsWithPagination } from "~/services/products/fetchProducts";
import { Product } from "~/services/products/productTypes";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({}: LoaderFunctionArgs) {
  return { products: await productsWithPagination(0, 4) };
}

export default function Index() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Platzi Fake Products API</h1>

      <section>
        <ProductsOverview {...products} />
      </section>
    </div>
  );
}

type ProductsOverviewProps = ApiResponse<Product[]>;

function ProductsOverview(products: ProductsOverviewProps) {
  const { status, data, message } = products;

  if (status !== 200 || data === undefined) {
    return (
      <ErrorTemplate message={message}>
        <Button variant="danger" onClick={() => window.location.reload()}>
          Recargar
        </Button>
      </ErrorTemplate>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2>Featured products</h2>
        <Link to="/products" prefetch="intent">
          View more →
        </Link>
      </div>
      <div className="products-grid">
        {data.map((product) => (
          <ProductTemplate
            key={product.id}
            product={product}
            layout="preview"
          />
        ))}
      </div>
    </>
  );
}
