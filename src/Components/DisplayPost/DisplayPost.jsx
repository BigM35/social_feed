import LikeButton from "../LikeButton/LikeButton";


const DisplayPost = (props) => {
    return (
        <table className="table-borderless">
            {props.parentEntries.map((entry, index)=> {
                    return (
                        <tr key={index}>
                            <thead>
                                <div>
                                    <td>{entry.name}</td>
                                </div>
                            </thead>
                            <tbody>
                                <td>{entry.post}</td>
                                <td>{<LikeButton/>}</td>
                            </tbody>
                        </tr>
                    )
                })}
        </table>
    );
}
export default DisplayPost;