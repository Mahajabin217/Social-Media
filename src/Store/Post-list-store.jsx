import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payLoad.postID);
    } else if(action.type ==='ADD_POST'){
        newPostList = [action.payLoad,...currPostList];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
        dispatchPostList({
            type: 'ADD_POST',
            payLoad: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userID: userId,
                tags: tags,
            },
        });
    };

    const deletePost = (postID) => {
        // console.log(`Delete post called for: ${postID}`);
        dispatchPostList({
            type: 'DELETE_POST',
            payLoad: {
                postID,
            },
        });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going to COX Bazar",
        body: "Hi,friends,I am going to Cox Bazar for my vacation.Hope to enjoy a lot,peace out!",
        reactions: 5,
        userID: "user-10",
        tags: ["vacation", "travel", "sea"],
    },
    {
        id: "2",
        title: "Complted my Graduation",
        body: "Finally! I have completed my graduation after struggling for 4 years.",
        reactions: 10,
        userID: "user-13",
        tags: ['graduation', 'seccuss', 'celebrate'],
    },
    {
        id: "3",
        title: "My first day at my new job",
        body: "I am so excited to start my new career as an Frontend Developer at ABC company.",
        reactions: 8,
        userID: "user-15",
        tags: ['job', 'career', 'developer'],
    },
];

export default PostListProvider;
