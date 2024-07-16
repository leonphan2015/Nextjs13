import { Post } from '@/models/index';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';
import { PostItem } from '../blog';

export interface PostCardProps{
    post: Post
}
export function PostCard ({post}: PostCardProps) {
    if(!post) return null
    return (
       <Card>
            <CardContent>
                <PostItem post={post} />
            </CardContent>
       </Card> 
    );
}
