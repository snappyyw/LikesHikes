import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {deleteCommentBlog} from "../action/blog";

function ListCommentsBlog({data, idBlog}) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return(
        <>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                    <Comment.Content>
                        <Comment.Author>{data.authorName}</Comment.Author>
                        <Comment.Metadata>
                            <div>{data.time}</div>
                            <div>
                                {
                                    data.rating &&
                                    <>
                                        <Icon name='star' />{data.rating}
                                    </>
                                }
                            </div>
                        </Comment.Metadata>
                        <Comment.Text>
                            {data.text}
                        </Comment.Text>
                        {
                            ((user.userName === data.authorName) || user.isAdmin ) &&
                            <Comment.Actions>
                                <Comment.Action onClick={() =>dispatch(deleteCommentBlog(
                                    {idComment: data.id, idBlog: idBlog}
                                ))}
                                >
                                    Удалить
                                </Comment.Action>
                            </Comment.Actions>
                        }
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </>
    )
}

export default ListCommentsBlog;