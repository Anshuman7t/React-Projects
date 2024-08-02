import styles from "./Button.module.css";

export const Button = ({icon, text, isOutline, ...rest}) => {
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  );
};
