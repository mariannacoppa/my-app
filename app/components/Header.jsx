'use client';
import "/node_modules/bootstrap/scss/bootstrap.scss";
import styles from "./mystyles.css";

function Header(){
    return (
        <header>
            <h1 className="text-warning text-center" style={styles.container}>Welcome in Next.js!</h1>
        </header>
    );
};

export default Header;