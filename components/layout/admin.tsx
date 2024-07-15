import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import * as React from 'react';
import Auth from '../common/auth';
import { useAuth } from '@/hooks/user-auth';
import { useRouter } from 'next/router';

export function AdminLayout ( { children } : LayoutProps ) {
  const {profile, logout} = useAuth()
  const router = useRouter()

  async function handleLogoutClick(){
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <h2>Sidebar </h2>
        <p>Profile: {JSON.stringify(profile)}</p>
        <button onClick={handleLogoutClick}>Logout</button>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div>
            {children}
        </div>
    </Auth>
  );
}
