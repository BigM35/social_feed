import DateTime from "../DateTime/DateTime";
import LikeButton from "../LikeButton/LikeButton";
import "./DisplayPost.css";

const DisplayPost = (props) => {
    
    return (
        <table className="continer">
            {props.parentEntries.map((entry, index)=> {
                return (
                    <tbody>
                        <div className="flex-box-2">
                            <td>{entry.name}</td>
                        </div>
                        <div className="flex-box-3">
                            <td>{entry.post}</td>
                        </div>
                        <div className={"flex-box-1"}>
                            <td>{entry.date}</td>
                            <td className="flex-item-1">{<LikeButton/>}</td>
                        </div>
                    </tbody>     
                )
            })}
        </table>
    );
}
export default DisplayPost;