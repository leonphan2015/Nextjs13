import { Box, Container, Stack, Typography, Link as MuiLink, Card } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Post } from '@/models/post';

export function RecentPosts () {
    const postList: Post[] = [
        {
            id: '1',
            slug: '',
            title: 'Making a design system from scratch',
            publishedDate: '2022-06-15T03:00:00Z',
            tagList: ['Design', 'Pattern'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            id: '2',
            slug: '',
            title: 'Creating pixel perfect icons in Figma',
            publishedDate: '2022-06-15T03:00:00Z',
            tagList: ['Figma', 'Icon Design'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        }
    ]
    return (
        <Box component="section" bgcolor="secondary.light" py={4}>
            <Container>
                <Stack direction="row" mb={2} justifyContent="space-between" alignItems='center'>
                    <Typography variant='h5'>Recent Post</Typography>
                    <Link href="/blog" passHref><MuiLink component="span">View All</MuiLink></Link>
                </Stack>
                <Stack direction={{xs: 'column', md: 'row'}} spacing={3} sx={{
                    '& > div': {
                        width: {
                            xs: '100%',
                            md: '50%',
                        }
                    }
                }}>
                    {postList.map(post => (
                        <Box key={post.id}><PostCard post={post} /></Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
