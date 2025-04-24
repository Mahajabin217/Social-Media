import { useContext, useRef } from 'react';
import { PostList } from '../Store/Post-list-store';

const CreatePost = () => {
    const { addPost } = useContext(PostList);
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";


        addPost(userId, postTitle, postBody, reactions, tags);
    }
    return (
        <>
            <form className="create-post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userID" className="Form-label">Enter Your UserID Here</label>
                    <hr />
                    <input type="text" ref={userIdElement} className="Form-control" id="userID" placeholder="Your User ID" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="Form-label">Post Title</label>
                    <hr />
                    <input type="text" ref={postTitleElement} className="Form-control" id="title" placeholder="How Are You Feeling Today!" />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="Form-label">Post Content</label>
                    <hr />
                    <textarea type="text" ref={postBodyElement} rows="5" className="Form-control" id="body" placeholder="Tell us more about it..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="Form-label">Number of reactions</label>
                    <hr />
                    <textarea type="text" ref={reactionsElement} className="Form-control" id="reactions" placeholder="How many people reacted to this post" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="Form-label">Enter Your HashTags Here</label>
                    <hr />
                    <textarea type="text" ref={tagsElement} className="Form-control" id="tags" placeholder="Please enter tags using space" />
                </div>

                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    );
}

export default CreatePost;