import { ChangeEvent, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface InputPasswordProps {
    label: string,
    placeholder: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword = (
    {
        value,
        onChange,
        label,
        placeholder
    }: InputPasswordProps) => {

        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

    return (
        <label
            className="flex flex-col items-center relative"
        >
            {label}
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
                className="form-input bg-gray-light text-center"
            />
            <div
                className="absolute top-[32px] right-4 cursor-pointer"
                onClick={togglePasswordVisibility}
            >
                {
                    showPassword
                        ? <EyeSlashIcon className="h-6" />
                        : <EyeIcon className="h-6" />
                }
            </div>
        </label>
    );
};
export default InputPassword;
