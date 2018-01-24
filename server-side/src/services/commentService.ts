import { default as Comment, CommentModel } from '../models/Comment';
import { parseErrors } from '../utils/errorParser';

export const postComment = (data: CommentModel, callback: any) => {
    const comment = new Comment({ ideaId: data.ideaId, userId: data.userId, description: data.description });
    comment.save()
        .then((comment: CommentModel) => callback(undefined, comment))
        .catch((comment: CommentModel) => callback(parseErrors(comment.errors), undefined));
};

export const deleteComment = (data: CommentModel, callback: any) => {
    Comment.findByIdAndRemove({ _id: data._id })
        .then((comment: CommentModel) => callback(undefined, comment))
        .catch((comment: CommentModel) => callback(parseErrors(comment.errors), undefined));
};