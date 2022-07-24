import styles from './Heading.module.css';

const Heading = ({ children }) => (
    <h3 className={styles.heading}>{children}</h3>
       
     
);

export default Heading;