import { CartType } from '@/utils/types';
import Image from 'next/image';

export default function Cart({ cart: data }: { cart: CartType }) {
  return (
    <div className="max-w-7xl w-full mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 justify-items-center items-stretch mx-auto">
        {data.products.map((product) => (
          <div key={product.id} className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg flex flex-col items-center justify-between w-full h-full">
            <Image src={product.thumbnail} width={160} height={160} unoptimized alt={product.title} className="w-40 h-40 rounded mb-6 object-cover" />
            <div className="text-center flex flex-col items-center flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{product.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Price: ${product.price.toFixed(2)}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Quantity: {product.quantity}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Total: ${product.total.toFixed(2)}</p>
              <p className="text-gray-600 dark:text-gray-400">Discounted Total: ${product.discountedTotal.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-8 mt-8 dark:border-gray-600">
        <div className="flex justify-between items-center text-gray-800 dark:text-gray-200 mb-3">
          <span className="font-semibold">Total Products:</span>
          <span>{data.totalProducts}</span>
        </div>
        <div className="flex justify-between items-center text-gray-800 dark:text-gray-200 mb-3">
          <span className="font-semibold">Total Quantity:</span>
          <span>{data.totalQuantity}</span>
        </div>
        <div className="flex justify-between items-center text-gray-800 dark:text-gray-200 mb-3">
          <span className="font-semibold">Total Price:</span>
          <span>${data.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Discounted Total:</span>
          <span>${data.discountedTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
