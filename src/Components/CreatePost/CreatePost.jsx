import { useState } from "react";


const CreatePost = (props) => {

    const[Name, setName] = useState('')
    const[Post, setPost] = useState('')

    function handleSubmit(){
        event.preventDefault;

        let newEntry = {
            name: Name,
            Post: Post
        };
        props./*someProperty*/(newEntry)

    }

    return (
        <form onSubmit={pass}>
            <label>Name</label>
            <input type="string" value={Name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type="string" value={Post} onChange={(event) => setPost(event.target.value)} />
            <button type="submit">Post</button>
        </form>

     );
}
 
export default CreatePost;