

const DisplayPost = (props) => {
    return (
        <table>
            
            <tbody>
                {props.parentEntries.map((entry, index)=> {
                        return (
                            <tr key={index}>
                                <td>{entry.name}</td>
                                <td>{entry.post}</td>
                            </tr>
                        )
                    })};
               
            </tbody>
        </table>
    );
}
export default DisplayPost;