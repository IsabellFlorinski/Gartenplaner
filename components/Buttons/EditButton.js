import styles from './Buttonstyles.module.css';

function Edit({  type, onClick }) {
    return (
        <div>
            <a href="http://localhost:3000/AddNewPlant" >
                <button  className={styles.btnEdit} onClick={onClick} type={type}> E </button>
            </a>
        </div>
    );
}
    


export default Edit;