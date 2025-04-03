'use client';
import Post from './Post';

function PostsList() {

    return (
        <>
            <ul>
                <li className="card text-center">
                    <Post author="Paul" body="vocalist" />
                </li>
                <li className="card text-center">
                    <Post author="George" body="guitarist" />
                </li>
                <li className="card text-center">
                    <Post author="Ringo" body="drummer" />
                </li>
            </ul>
        </>
    );
}

export default PostsList;