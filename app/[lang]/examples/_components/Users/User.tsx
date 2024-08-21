import { UserType } from '@/utils/types';
import Image from 'next/image';

export default function User({ user }: { user: UserType }) {
  return (
    <div
      key={user.id}
      className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out transform flex flex-col items-center space-y-2"
    >
      <Image width={200} height={200} unoptimized src={user.image} alt={`${user.firstName} ${user.lastName}`} className="w-32 h-32 rounded-full mb-2 shadow-lg" />

      <h2 className="text-3xl font-semibold text-center text-indigo-700 dark:text-indigo-400 mb-2">
        {user.firstName} {user.lastName}
      </h2>
      <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
        <p className="flex items-center">
          <span className="font-semibold mr-2">Email:</span> {user.email}
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Phone:</span> {user.phone}
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Age:</span> {user.age} years old
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Address:</span>
          {user.address.city}, {user.address.state}
        </p>
      </div>
    </div>
  );
}
