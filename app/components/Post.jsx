'use client';
function Post(props) {
    return <div style={{color: 'goldenrod', backgroundColor: 'purple'}}>
        <h5>{props.author}</h5>
        <p>{props.body}</p>
    </div>
}
// function Post({ author, body }) {
//     return (
//         <div className="card-body">
//             <h5 className="card-title">{author}</h5>
//             <p className="card-text">{body}</p>
//         </div>
//     );
// }

export default Post;
