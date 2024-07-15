import * as React from 'react';
import { useAuth } from '@/hooks/index';
import { MainLayout } from '@/components/layout';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const router = useRouter()
    const { profile, login } = useAuth({
        revalidateOnMount: false,
    });

    async function handleLoginClick() {
        try {
            await login();
            console.log('redirect to dashboard');

        } catch (error) {
            console.log('failed to login', error);
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
}

LoginPage.Layout = MainLayout