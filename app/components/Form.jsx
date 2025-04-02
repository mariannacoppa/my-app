'use client';
import { useState } from 'react';
import "/node_modules/bootstrap/scss/bootstrap.scss";

function Form() {
    const [enteredText, setEnteredText] = useState('');
    const [enteredName, setEnteredName] = useState('');

    function changeTextHandler(event) {
        setEnteredText(event.target.value);
    }
    function changeNameHandler(event) {
        setEnteredName(event.target.value);
    }

    return (
        <>
            <form className="bg-green rounded-2 text-center p-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Text</label>
                    <textarea type="text" className="form-control" id="exampleInputText" required rows={3} onChange={changeTextHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                    <textarea type="text" className="form-control" id="exampleInputName" required onChange={changeNameHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>{enteredName}</h5>
                        <p>{enteredText}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;