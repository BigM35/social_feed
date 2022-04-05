import { useState } from "react";



      
const LikeButton = (props) => {
    
    const [state, setState] = useState(false);
    let count = undefined;

    const toggleButton = () => {
        setState(!state);
    }
    return ( 
        <button onClick={toggleButton}
        className={'toggle--button' + (state ? 'toggle--close ': '')}
        >{state ? "Dislike": "Like"}
        </button>
    );
}
 
export default LikeButton;