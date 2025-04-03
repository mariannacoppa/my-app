'use client';
import { useState } from 'react';
import "/node_modules/bootstrap/scss/bootstrap.scss";

function Form({handleText, handleName, name, text}) {
    


    return (
        <>
            <form className="bg-green rounded-2 text-center p-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Text</label>
                    <textarea type="text" className="form-control" id="exampleInputText" required rows={3} onChange={handleText} value={text} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                    <textarea type="text" className="form-control" id="exampleInputName" required onChange={handleName} value={name} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>{name}</h5>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;