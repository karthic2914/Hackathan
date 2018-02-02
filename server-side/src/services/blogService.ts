import { default as Blog, BlogModel } from '../models/Blog';
import { parseErrors } from '../utils/errorParser';
import { UserModel } from '../models/User';


export const saveBlog = (data: BlogModel, callback: any) => {
    const blog = new Blog({ title: data.title, description: data.description, imageUrl: data.imageUrl });
    blog.save()
        .then((blog: BlogModel) => callback(undefined, blog))
        .catch((blog: BlogModel) => callback(parseErrors(blog.errors), undefined));
};

export const getActiveBlogs = ({ }, callback: any) => {
    Blog.find({isActive: true})
        .then((blogs: BlogModel[]) => callback(undefined, blogs))
        .catch((blogs: any) => callback(parseErrors(blogs.errors), undefined));
};

export const getAllBlogs = ({ }, callback: any) => {
    Blog.find()
        .then((blogs: BlogModel[]) => callback(undefined, blogs))
        .catch((blogs: any) => callback(parseErrors(blogs.errors), undefined));
};

export const updateBlog = (data: BlogModel, owner: UserModel, callback: any) => {
    fetchBlogById(data._id).then((blog: BlogModel) => {
      if (!blog) {
          return callback({errors: {global: 'Idea not found'}}, undefined);
      } else {
          blog.isActive = data.isActive;
          blog.save()
          .then((blog: BlogModel) => callback(undefined, blog))
          .catch((blog: any) => callback(parseErrors(blog.errors), undefined));
      }
  });
};

export const fetchBlogById = (id: any) => {
    return Blog.findById(id).then(blog => blog).catch(err => err);
};