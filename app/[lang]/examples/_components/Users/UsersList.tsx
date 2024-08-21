import { UserType } from '@/utils/types';
import User from './User';

async function getAllPosts() {
  const res = await fetch('https://dummyjson.com/users', {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 7200 },
  });
  const data = await res.json();

  if (!data) {
    console.log('error!');
  }

  let { users } = data;
  return users as UserType[];
}

export default async function UsersList() {
  const users = await getAllPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 container pb-10">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
