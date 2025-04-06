import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, type = "button", children, ...props }) => {
    return (
        <button
            type={type}
            className={twMerge("px-4 py-2 rounded-lg transition", className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
