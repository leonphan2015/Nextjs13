import useSWR, { SWRConfiguration } from 'swr';
import { authApi } from '@/api/index';

export function useAuth(options?: Partial<SWRConfiguration>) {
    const {
        data: json,
        error,
        mutate,
    } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options,
    });

    // Extract data from json if json is defined
    const profile = json?.data;

    const firstloading = !json && !error;

    async function login() {
        await authApi.login({
            username: 'test1',
            password: '123123',
        });
        await mutate();
    }

    async function logout() {
        await authApi.logout();
        mutate({}, false);
    }

    return {
        profile,
        error,
        login,
        logout,
        firstloading
    };
}