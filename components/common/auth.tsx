import { useAuth } from '@/hooks/user-auth';
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';

export interface AuthProps{
    children: any
}

export default function Auth ({children}: AuthProps) {
    const router = useRouter()
    const {profile, firstloading} = useAuth()

    useEffect(() => {
        if(!firstloading && !profile?.username) router.push('/login')
    }, [router, profile, firstloading])

    if(!profile?.username) return <p>Loading....</p>
    
    return <div>{children}</div>
}
