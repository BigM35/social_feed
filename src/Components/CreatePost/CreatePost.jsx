import { useState } from "react";
import "./CreatePost.css"

const CreatePost = (props) => {

    const[Name, setName] = useState('')
    const[Post, setPost] = useState('')

    
    function handleSubmit(event){
        event.preventDefault();

        let newEntry = {
            name: Name,
            post: Post
        };

        props.addNewEntryProperty(newEntry);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="string" className="form-control" value={Name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div class="media-body">
            <label>Post</label>
                <textarea type="string" className="form-control" rows="2" value={Post} onChange={(event) => setPost(event.target.value)}></textarea>
                <button class="btn btn-sm btn-primary pull-right" type="submit"><i class="fa fa-pencil fa-fw"></i> Share</button>
            </div>
        </form>

     );
}
 
export default CreatePost;