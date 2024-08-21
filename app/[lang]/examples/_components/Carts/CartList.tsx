import { CartType } from '@/utils/types';
import Cart from './Cart';

async function getAllCarts() {
  const res = await fetch('https://dummyjson.com/carts', {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 7200 },
  });
  const { carts } = await res.json();

  if (!carts) {
    console.log('error!');
  }

  const filteredCarts = carts.filter((c: CartType) => c.products.length >= 2);

  filteredCarts.sort(() => Math.random() - 0.5);

  return filteredCarts.slice(0, 8) as CartType[];
}

export default async function CartList() {
  const carts = await getAllCarts();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-[1500px] lg:px-8">
      <h2 className="sr-only">Cart</h2>
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-4 gap-y-10">
        {carts.map((i) => (
          <Cart cart={i} key={i.id} />
        ))}
      </div>
    </div>
  );
}
