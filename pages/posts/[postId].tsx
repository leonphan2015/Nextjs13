import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface PostPageProps {
}

export default function PostPage (props: PostPageProps) {
    const router = useRouter();
  return (
    
    <div>
      <h1>Post Details Page</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const reponse = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await reponse.json();
    
    return {
        paths: data.data.map((post: any) => ({ param: { postId: post.id } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ( context: GetStaticPropsContext ) => {
    const reponse = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await reponse.json();
    return {
        props:{
            posts:data.data.map((x : any) => ({ id: x.id, title: x.title })),
        }
    }
}