const Input = ({ 
    type = "text",
    placeholder = "", 
    onChange, 
    value, 
    className = "", 
    ...props 
  }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`p-2 border rounded outline-none hover:ring-primary hover:ring-2 focus:ring-2 focus:ring-primary sloid ${className}`}
        {...props}
      />
    );
  };
  
  export default Input;
  