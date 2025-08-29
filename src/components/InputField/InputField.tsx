import React, { useState } from 'react';
import type { InputFieldProps } from './InputField.types';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose } from 'react-icons/ai';
import clsx from 'clsx';

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = 'outlined',
  size = 'md',
  showClearButton,
  showPasswordToggle,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const variantClasses = {
    filled: 'bg-gray-100 border border-gray-300 rounded',
    outlined: 'bg-white border border-gray-400 rounded',
    ghost: 'bg-transparent border-b border-gray-400',
  };

  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <div className="relative flex items-center">
        <input
          type={showPassword ? 'text' : 'text'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={clsx(
            'w-full focus:outline-none',
            sizeClasses[size],
            variantClasses[variant],
            invalid && 'border-red-500',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        />
        {showClearButton && value && (
          <button
            type="button"
            onClick={() => onChange && onChange({ target: { value: '' } } as any)}
            className="absolute right-8 text-gray-400 hover:text-gray-600"
          >
            <AiOutlineClose />
          </button>
        )}
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        )}
      </div>
      {helperText && <span className="text-gray-500 text-sm mt-1">{helperText}</span>}
      {invalid && errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
};
