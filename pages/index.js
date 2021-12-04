import Head from 'next/head';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '../components/Header';

export default function Home() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Header />
      <div className="mx-auto p-8 max-w-4xl ">
        {session && (
          <div>
            <p>Hello {session.user.name}</p>
            <code> {session.user.email} </code>
          </div>
        )}
        {!session && (
          <div>
            <p>log in to continue</p>
          </div>
        )}

        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </div>
    </div>
  );
}
