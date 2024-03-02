import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

import useLogin from '../../hooks/useLogin';


const Login = () => {
    const {
        paws,
        logoBlue,
        password,
        setPassword,
        showPassword,
        togglePasswordVisibility
    } = useLogin();
    console.log(password)
    return (
        <div
            className="ly-pages-mobile md:ly-pages-desktop md:ly-desktop flex flex-col gap-10 justify-center items-center text-gray-light -mt-[300px]  h-screen md:-mt-[470px] -mb-[52px] md:-mb-[56px]"
        >
            <img src={paws} className="fixed top-0 right-0 z-10" />
            <img src={logoBlue} className="w-[142px] -mt-[100px] md:w-[250px] md:-mt-[0px]" />
            <span className="text-primary text-lg">
                Já tem conta? Faça seu login:
            </span>

            <form
                className="w-[80%] max-w-[550px] text-gray-dark flex flex-col gap-6 relative z-[999]"
            >
                <label className="flex flex-col items-center">
                    Email
                    <input
                        type="email"
                        placeholder="Insira seu email"
                        required
                        className="form-input"
                    />
                </label>
                <label
                    className="flex flex-col items-center relative"
                >
                    Senha
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                    />
                    <div
                        className="absolute top-[32px] right-4 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword
                            ? <EyeSlashIcon className="h-6" />
                            : <EyeIcon className="h-6" />
                        }
                    </div>
                </label>
                <Link
                    to='#'
                    className="text-xs text-tertiary underline m-auto md:text-sm"
                >
                    Esqueci minha senha.
                </Link>
                <button className="btn m-auto text-gray-light">Entrar</button>
            </form>
        </div>
    );
};
export default Login;
