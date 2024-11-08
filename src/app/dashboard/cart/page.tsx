import { WidgetItem } from "@/components";
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
  const totalToPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0
  );

  return (
    <div>
      <h1 className="text-4xl">Shopping Cart</h1>
      <hr className="my-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
        <div className="flex flex-col sm:w-4/12 w-full">
          <WidgetItem title="Total">
            <div className="mt-2 flex flex-col justify-center items-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">
                ${(totalToPay * 1.15).toFixed(2)}
              </h3>
              <span className="font-bold text-center text-gray-500">
                Taxes 15%: ${(totalToPay * 0.15).toFixed(2)}
              </span>
            </div>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
