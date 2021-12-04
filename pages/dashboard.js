import { useSession, getSession } from 'next-auth/react';
import Link from 'next/link';

export default function dashboard({ session }) {
  return (
    <div>
      Dashboard should appear to logged in users <br />
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
