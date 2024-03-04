import { Link } from 'react-router-dom';
import useLoginAndRegister from '../../hooks/useLoginAndRegister';

import InputPassword from '../../components/InputPassword';


const Login = () => {
    const {
        paws,
        logoBlue,
        password,
        setPassword,
    } = useLoginAndRegister();

    return (
        <div
            className="ly-pages-mobile md:ly-pages-desktop md:ly-desktop flex flex-col gap-10 justify-center items-center -mt-[300px]  h-screen md:-mt-[470px] -mb-[52px] md:-mb-[56px]"
        >
            <img src={paws} className="fixed top-0 right-0 z-10" />
            <img src={logoBlue} className="w-[142px] -mt-[100px] lg:w-[250px] md:-mt-[0px]" />
            <span className="text-primary text-lg">
                Já tem conta? Faça seu login:
            </span>

            <form
                className="w-[80%] max-w-[550px] text-gray-dark flex flex-col gap-6"
            >
                <label className="flex flex-col items-center">
                    Email
                    <input
                        type="email"
                        placeholder="Insira seu email"
                        required
                        className="form-input bg-gray-light text-center"
                    />
                </label>
                <InputPassword
                    label="Senha"
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <Link
                    to='#'
                    className="text-xs text-tertiary underline m-auto md:text-sm"
                >
                    Esqueci minha senha.
                </Link>
                <button type="submit" className="btn">Entrar</button>
            </form>
        </div>
    );
};
export default Login;
