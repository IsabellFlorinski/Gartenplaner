import styles from './Buttonstyles.module.css';

function Delete({  type, onClick }) {
    return (
        <div>
            <a href="http://localhost:3000/DeletedPlant" >
                <button  className={styles.btnDelete} onClick={onClick} type={type}> D </button>
            </a>
        </div>
    );
}
    


export default Delete;