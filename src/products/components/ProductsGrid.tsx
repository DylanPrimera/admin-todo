import { products } from "../models/product";
import { ProductCard } from "./ProductCard";
export const ProductsGrid = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
