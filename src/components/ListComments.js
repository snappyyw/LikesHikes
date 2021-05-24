import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';

function ListComments() {
    const blog = useSelector(state => state.blog.posts);

    return(
        <div>
            <Avatar>N</Avatar>
        </div>
    )
}

export default ListComments;