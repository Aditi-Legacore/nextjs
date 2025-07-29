import Link from "next/link";

import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, alignItems: 'center' }}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <li style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <p style={{ margin: 0 }}>{user.given_name}</p>
              <LogoutLink style={{ padding: '0.5rem 1rem', backgroundColor: '#e53e3e', color: 'white', borderRadius: '0.375rem', cursor: 'pointer', textDecoration: 'none' }}>Log Out</LogoutLink>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <LoginLink style={{ padding: '0.5rem 1rem', backgroundColor: '#3182ce', color: 'white', borderRadius: '0.375rem', cursor: 'pointer', textDecoration: 'none' }}>Sign in</LoginLink>
              <RegisterLink style={{ padding: '0.5rem 1rem', backgroundColor: '#38a169', color: 'white', borderRadius: '0.375rem', cursor: 'pointer', textDecoration: 'none' }}>Sign up</RegisterLink>
            </div>
          )
          }


        </li>
      </ul>
    </nav>
  );
};

