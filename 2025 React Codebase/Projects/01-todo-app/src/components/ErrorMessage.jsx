import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
    return (<div className={"row w-100 h-100 " + styles['error-message-container']}>
        <h3>Oops! No more todo's yet.</h3>
    </div>
    );
};

export default ErrorMessage;