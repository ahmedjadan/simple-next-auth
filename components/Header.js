import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  console.log(session, 'nav');
  return (
    <div className="max-w-full mx-auto p-6 bg-gray-600 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-100">AJ.</h1>
      <button onClick={() => signIn()}>{!session ? 'Sign In' : ''}</button>

      {session && (
        <div className="flex items-center space-x-4 text-gray-100">
          <div className="flex items-center">
            <h2 className="px-2"> {session.user.name} </h2>

            <Image
              src={session.user.image}
              alt=""
              width={30}
              height={30}
              className="rounded-md"
            />
          </div>
          <button onClick={() => signOut()}>
            {' '}
            {session ? ' Sign Out' : ''}{' '}
          </button>
        </div>
      )}
    </div>
  );
}
