import Seo from '@/components/common/seo';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { PostAddRounded } from '@mui/icons-material';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export interface BlogPageProps {
    post: Post
}

export default function BlogPage ({post}: BlogPageProps) {
    if(!post) return null

    return (
        <Box>
            <Seo data={{
                title: post.title,
                description: post.description,
                url: `/blog/${post.slug}`,
                thumbnailUrl: post.thumbnailUrl
            }}
             />
            <Container>
                <h1>{post.title}</h1>
                <p>{post.author?.name}</p>
                

                <Divider />
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
            </Container>
        </Box>
    );
}
BlogPage.Layout = MainLayout
export const getStaticPaths: GetStaticPaths = async () => {
    const postList = await getPostList();
    
    return {
        paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ( context: GetStaticPropsContext ) => {
    const postList = await getPostList()
    const slug = context.params?.slug
    if(!slug) return {notFound: true}
    const post = postList.find(x => x.slug === slug)
    if(!post) return { notFound: true }
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, {title: 'Blog Details Page'})
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.mdContent || '')
    post.htmlContent = file.toString()
    return {
        props:{
            post,
        }
    }
}