'use client';
import Form from './Form';
import Post from './Post';
import { useState } from 'react';

function PostsList() {
    // const [enteredText, setEnteredText] = useState('');
    // const [enteredName, setEnteredName] = useState('');

    // function textChangeHandler(event) {
    //     setEnteredText(event.target.value);
    // }

    // function nameChangeHandler(event) {
    //     setEnteredName(event.target.value);
    // }

    return (
        <>
            {/* <Form 
                onTextChange={textChangeHandler} 
                onNameChange={nameChangeHandler} 
            /> */}
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