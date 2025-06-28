import { Product } from "~/services/products/productTypes";

export type ProductTemplateProps = {
  product: Product;
  layout: "preview" | "complete";
};

export function ProductTemplate({ product, layout }: ProductTemplateProps) {
  const containerClassname = `product-card-${layout}`;

  return (
    <div className={containerClassname}>
      <ProductImages product={product} layout={layout} />
      <h2>{product.title}</h2>
    </div>
  );
}

type ProductImagesProps = {
  product: Product;
  layout: ProductTemplateProps["layout"];
};

function ProductImages({ product, layout }: ProductImagesProps) {
  const { images, description } = product;

  if (layout === "preview") {
    return <img src={images[0]} />;
  }

  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image} alt={description} />
        </li>
      ))}
    </ul>
  );
}
