import { Box, Container, Stack, Typography, Link as MuiLink, Card } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Work } from '@/models';
import WorkList from '../work/work-list';

export function FeatureWorks () {
    const workList: Work[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            createAt: '1648363391671',
            updateAt: '1648363391671',
            tagList: ['Dashboard'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: 'https://res.cloudinary.com/dqulc97ye/image/upload/v1721059846/item1_kdh8qo.jpg',
        },
        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            createAt: '1648363391671',
            updateAt: '1648363391671',
            tagList: ['Illustration'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: 'https://res.cloudinary.com/dqulc97ye/image/upload/v1721059846/item3_fztzua.jpg',
        },
        {
            id: '3',
            title: '36 Days of Malayalam type',
            createAt: '1648363391671',
            updateAt: '1648363391671',
            tagList: ['Typography'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: 'https://res.cloudinary.com/dqulc97ye/image/upload/v1721059846/item2_zt22pd.jpg',
        },
    ]
    return (
        <Box component="section" py={4}>
            <Container>
                <Typography variant='h5' mb={3}>Featured Works</Typography>
                <WorkList workList={workList} />
            </Container>
        </Box>
    );
}
