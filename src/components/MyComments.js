import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import {useDispatch} from "react-redux";

import {deleteComment} from '../action/route'

function MyComments({data, idRoute}) {
    const dispatch = useDispatch();

    return(
        <>
            <h3>Ваш отзыв:</h3>
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
                        <Comment.Actions>
                            <Comment.Action onClick={() => dispatch(deleteComment(
                                {idComment: data.id, idRoute: idRoute}
                            ))}
                            >Удалить</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </>
    )
}

export default MyComments;