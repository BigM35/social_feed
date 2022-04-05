import LikeButton from "../LikeButton/LikeButton";


const DisplayPost = (props) => {
    return (
        <table>
            <tbody>
                {props.parentEntries.map((entry, index)=> {
                        return (
                            <tr key={index}>
                                <td>{entry.name}</td>
                                <td>{entry.post}</td>
                                <td>{<LikeButton/>}</td>
                            </tr>
                        )
                    })}
               
            </tbody>
        </table>
    );
}
export default DisplayPost;