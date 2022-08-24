import BlogData from "../Data/BlogData";

const initialState = {
    blogs: BlogData,
    filters: {
        category: 'all',
        authorName: 'all',
        input_value: ''
    }
}
export default initialState;