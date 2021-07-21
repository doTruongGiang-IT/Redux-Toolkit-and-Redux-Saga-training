import React from 'react'

const Button = ({children, onClick, type, addClassNames}) => {
    let color = "purple";
    if(type === "error") {
        color = "red";
    };
    return (
        <button className={`bg-${color}-500 hover:bg-${color}-700 focus:outline-none px-6 py-3 text-white shadow-xl rounded-xl ${addClassNames}`} 
                onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
