import { Post } from '@/models/index';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';

export interface PostCardProps{
    post: Post
}
export function PostCard ({post}: PostCardProps) {
    if(!post) return null
    return (
       <Card>
            <CardContent>
                <Typography variant="h5" fontWeight="bold">{post.title}</Typography>
                <Stack direction="row" my={3}>
                    <Typography variant="body2"> {format(Number(post.publishedDate), 'dd MMM yyyy')}</Typography>
                    <Divider orientation="vertical" flexItem sx={{mx: 2}} />
                    <Typography variant="body2">{post.tagList.join(', ')}</Typography>
                </Stack>
                <Typography variant="body2">{post.description}</Typography>
            </CardContent>
       </Card> 
    );
}
