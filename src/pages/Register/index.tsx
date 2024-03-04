import useLogin from "../../hooks/useLogin";

import InputPassword from "../../components/InputPassword";
import useRegister from "../../hooks/useRegister";

const Register = () => {
    const { logoBlue, paws } = useLogin();
    const {
        name,
        setName,
        id,
        setId,
        password,
        setPassword,
        samePassword,
        setSamePassword,
        userSubmit
    } = useRegister();

    return (
        <div
            className="ly-pages-mobile md:ly-pages-desktop md:ly-desktop flex flex-col gap-10 justify-center items-center text-gray-light -mt-[300px]  h-screen md:-mt-[470px] -mb-[52px] md:-mb-[56px]"
        >
            <img src={paws} className="fixed top-0 right-0 z-10" />
            <img src={logoBlue} className="w-[142px] mt-[60px] lg:w-[250px] md:-mt-[0px] relative z-10" />
            <span className="text-primary text-lg">Ainda não tem cadastro?</span>

            <span className="text-primary text-base max-w-[500px] text-center md:text-lg mx-[2px]">
                Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
            </span>


            <form
                onSubmit={userSubmit}
                className="w-[80%] max-w-[550px] text-gray-dark flex flex-col gap-4"
            >
                <label className="flex flex-col items-center">
                    Nome
                    <input
                        type="text"
                        placeholder="Digite seu nome completo"
                        required
                        className="form-input bg-gray-light text-center"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </label>
                <label className="flex flex-col items-center">
                    Email
                    <input
                        type="email"
                        placeholder="Escolha seu melhor email"
                        required
                        className="form-input bg-gray-light text-center"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                </label>

                <InputPassword
                    label="Senha"
                    placeholder="Crie sua senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <InputPassword
                    label="Confirme sua senha"
                    placeholder="Repita a senha criada acima"
                    value={samePassword}
                    onChange={event => setSamePassword(event.target.value)}
                />
                <button
                    type="submit"
                    className="btn"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
};
export default Register;
