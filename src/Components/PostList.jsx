import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListData);
    // console.log(postList);

    // 1st way to fetch data: button click kore:

    // const handleGetPostClicked = () => {
    //     // console.log('Get post clicked');
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         // .then(console.log);
    //         .then((data) => {
    //             console.log(data.posts);
    //             addInitialPost(data.posts);
    //         });
    // };

    // 2nd way to fetch data: useState use kore:

    // const [dataFetched, setDataFetched] = useState(false);
    // if (!dataFetched) {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         // .then(console.log);
    //         .then((data) => {
    //             console.log(data.posts);
    //             addInitialPost(data.posts);
    //         });
    //     setDataFetched(true);
    // }

    const [fetching, setFetching] = useState(false);
    // 3rd way to fetch data: useEffect use kore:

    // Junior Developer ra kore ai bhabe:

    // useEffect(() => {
    //     setFetching(true);
    //     console.log('fetched startted');
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         // .then(console.log);
    //         .then((data) => {
    //             // console.log(data.posts);
    //             addInitialPost(data.posts);
    //             setFetching(false);
    //             console.log('Fetch retured');
    //         });
    //     console.log('fetching ended');
    // }, []);

    // Senior/Pro Developer ra kore ai bhabe:

    useEffect(() => {
        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then((data) => {
                addInitialPost(data.posts);
                setFetching(false);
            });

        return () => {
            console.log('Cleanup function called');
            controller.abort();
        }
    }, []);


    return (
        <>
            {fetching && <LoadingSpinner></LoadingSpinner>}
            {!fetching && postList.length === 0 && <WelcomeMsg ></WelcomeMsg>}
            {!fetching && postList.map((post) => (<Post key={post.id} post={post}></Post>))}
            {/* <Post></Post>
            <Post></Post>
            <Post></Post> */}
        </>
    );
}

export default PostList;