import { ALLBLOGS, AUTHOR, CATEGORY, INPUT_VALUE } from "./actionTypes"

export const allBlogs = () => {
    return {
        type: ALLBLOGS
    }
}

export const categoryFilter = (category) => {
    return {
        type: CATEGORY,
        payload: category
    }
}

export const authorFilter = (authorName) => {
    return {
        type: AUTHOR,
        payload: authorName
    }
}

export const searchFilter = (input_value) => {
    return {
        type: INPUT_VALUE,
        payload: input_value
    }
}