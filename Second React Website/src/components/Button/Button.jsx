import styles from './Button.module.css';

const Button = ({isOutline,icon,text,...rest}) => {
  return (
    <div>
      <button {...rest} 
      className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
      </button>
    </div>
  )
}

export default Button