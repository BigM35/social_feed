import LikeButton from "../LikeButton/LikeButton";


const DisplayPost = (props) => {
    return (
        <table className="table">
            {props.parentEntries.map((entry, index)=> {
                    return (
                        <tr key={index}>
                            <thead>
                                <div>
                                    <td>{entry.name}</td>
                                </div>
                            </thead>
                            <tbody>
                                <div>
                                    <td>{entry.post}</td>
                                </div>
                                <div className="text-right">
                                    <td>{<LikeButton/>}</td>
                                </div>
                            </tbody>
                        </tr>
                    )
                })}
        </table>
    );
}
export default DisplayPost;