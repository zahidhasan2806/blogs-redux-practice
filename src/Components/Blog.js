import React from 'react';
import { useDispatch } from 'react-redux';
import { authorFilter, categoryFilter } from '../redux/actions';

const Blog = ({ blog }) => {
    const dispatch = useDispatch();
    const { title, category, img, authorImg, authorName, date, publishedTime } = blog;


    const categoryFilterHandler = (category) => {
        dispatch(categoryFilter(category))
    }

    const authorFilterHandler = (authorName) => {
        dispatch(authorFilter(authorName))
    }
    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span

                            className="inline-flex items-center cursor-pointer px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            onClick={() => categoryFilterHandler(category)}
                        >
                            {category}
                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img

                            className="h-10 w-10 rounded-full cursor-pointer"
                            src={authorImg}
                            alt=""
                            onClick={() => authorFilterHandler(authorName)}
                        />
                    </div>
                    <div className="ml-3">
                        <p

                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer" onClick={() => authorFilterHandler(authorName)}
                        >
                            {authorName}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time dateTime="2020-03-16"
                            >{date}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {publishedTime} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;