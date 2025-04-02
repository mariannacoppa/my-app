'use client';
import Post from "./Post";
import Header from "./header";
import PostsList from "./PostsList";
import Form from "./Form";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import styles from "./mystyles.css";

export default function AwesomePage(){
    return (
    <>
        <header>
            <Header></Header>
        </header>
        <main>
            <div className="container" style={styles.container}>
                <div className="row">
                    <div className="col-4">
                        <div className="card text-center">
                            <Post author="Paul" body="vocalist" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center">
                            <Post author="George" body="guitarist" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center">
                            <Post author="Ringo" body="drummer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <Form />
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <PostsList />
        </footer>
    </>
    );
}