import { Product, products } from "@/products/models/product";
import { ItemCard } from "@/shooping-cart";
import { cookies } from "next/headers";

export const metadata = {
  title: "Shooping Cart",
  description: "Shooping Cart",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find((product) => product.id === id);
    if (product) productsInCart.push({ product, quantity: cart[id] });
  }
  return productsInCart;
};

export default async function CartPage() {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };
  
  const productsInCart = getProductsInCart(cart);


  return (
    <div>
      <h1 className="text-4xl">Shopping Cart</h1>
      <hr className="my-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({product, quantity}) => (
            <ItemCard
              key={product.id}
              product={product}
              quantity={quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
