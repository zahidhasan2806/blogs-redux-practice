import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allBlogs } from '../redux/actions';
import Blog from './Blog';

const Blogs = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { blogs, filters } = state;

    const handleAllBlogs = () => {
        dispatch(allBlogs())
    }


    const handleCategoryFilter = (blog) => {
        switch (filters.category) {
            case blog.category:
                return true;
            case 'all':
                return true;
            default:
                return false;
        }
    }
    const handleAuthorFilter = (blog) => {

        switch (filters.authorName) {
            case blog.authorName:
                return true;
            case 'all':
                return true;
            default:
                return false;
        }
    };
    const searchedBlogs = (blog) => {
        if (filters.input_value === '') {
            return true

        } else {
            if (blog.title.toLowerCase().includes(filters.input_value.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    return (
        <>
            <div>
                <div className="text-center">
                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                    <button className="mx-5 bg-indigo-100 px-3 py-0.5 rounded-full float-right text-m font-semibold text-indigo-800" onClick={handleAllBlogs}>All Blogs</button>

                </div>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                {
                    blogs.filter(searchedBlogs)
                        .filter(handleCategoryFilter)
                        .filter(handleAuthorFilter)
                        .map(blog => <Blog blog={blog} key={blog.id} />)
                }
            </div>
        </>
    );
};

export default Blogs;