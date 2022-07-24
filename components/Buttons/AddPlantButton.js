import styles from './Buttonstyles.module.css';

function AddPlant({  type, onClick }) {
    return (
        <div>
            <a href="http://localhost:3000/AddNewPlant" >
                <button  className={styles.APbtn} onClick={onClick} type={type}> + </button>
            </a>
        </div>
    );
}
    


export default AddPlant;