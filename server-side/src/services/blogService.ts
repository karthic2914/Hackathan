import { default as Blog, BlogModel } from '../models/Blog';
import { parseErrors } from '../utils/errorParser';

export const saveBlog = (data: BlogModel, callback: any) => {
    const blog = new Blog({ title: data.title, description: data.description, imageUrl: data.imageUrl });
    blog.save()
        .then((blog: BlogModel) => callback(undefined, blog))
        .catch((blog: BlogModel) => callback(parseErrors(blog.errors), undefined));
};

export const getAllBlogs = ({ }, callback: any) => {
    Blog.find()
        .then((blogs: BlogModel[]) => callback(undefined, blogs))
        .catch((blogs: any) => callback(parseErrors(blogs.errors), undefined));
};

export const updateBlog = (data: BlogModel, callback: any) => {
    Blog.update({ _id: data._id }, { $set: { isActive: data.isActive }})
                .then((blog: BlogModel) => callback(undefined, blog))
                .catch((blog: BlogModel) => callback(parseErrors(blog.errors), undefined));
            };