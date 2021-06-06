import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {deleteComment} from "../action/route";

function ListComments({data, idRoute}) {
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
                                <Icon name='star' />{data.rating}
                            </div>
                        </Comment.Metadata>
                        <Comment.Text>
                            {data.text}
                        </Comment.Text>
                        {
                            user.isAdmin &&
                            user.userName &&
                            <Comment.Actions>
                                <Comment.Action onClick={() => dispatch(deleteComment(
                                    {idComment: data.id, idRoute: idRoute}
                                    ))}
                                >Удалить</Comment.Action>
                            </Comment.Actions>
                        }
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </>
    )
}

export default ListComments;