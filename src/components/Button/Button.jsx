import "./button.css";

const Button = ({type, title, variant}) => {
  return (
    <button 
        type={type}
        className={`btn ${variant}`}
    >
        {title}
    </button>
  )
}

export default Button;