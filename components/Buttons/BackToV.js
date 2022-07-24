import styles from './Buttonstyles.module.css';

function BackToV({  type, onClick }) {
    return (
        <div className={styles.APbtn}>
            <a href="http://localhost:3000" >
                <button  className={styles.APbtn} onClick={onClick} type={type}> X </button>
            </a>
        </div>
    );
}
    


export default BackToV;