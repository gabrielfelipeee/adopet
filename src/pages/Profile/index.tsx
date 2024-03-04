
import { Link } from "react-router-dom";
const Profile = () => {
    return (
        <main className="grid justify-center lg:ly-pages-desktop lg:-mt-[500px]">
            <span
                className="text-base font-400 text-primary text-center w-[65%] max-w-[524px] mx-auto -mt-28 md:text-lg lg:mt-24 lg:mb-8"
            >
                Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
            </span>
            <div className="form">
                <h2 className="font-600 text-xl text-center text-gray-dark">Perfil</h2>
                <h3 className="form-label">Foto</h3>
                <img
                    src="https://placehold.co/96"
                    alt="Foto de perfil"
                    className="w-24 rounded-full m-auto"
                />
                <Link
                    to='#'
                    className="text-xs text-tertiary underline m-auto md:text-sm"
                >
                    Clique na foto para editar
                </Link>
            </div>
            <form className="form mb-8">
                <label className="form-label">
                    Nome
                    <input
                        className="form-input bg-white"
                        type="text"
                        placeholder="Insira seu nome completo"
                        required
                        value="Joana Magalhães"
                        //onChange={event => {}}
                    />
                </label>
                <label className="form-label">
                    Telefone
                    <input
                        className="form-input bg-white"
                        type="text"
                        placeholder="(00) 00000-0000"
                        required
                        value="(00) 00000-0000"
                        //onChange={event => {}}
                    />
                </label>
                <label className="form-label">
                    Cidade
                    <input
                        className="form-input bg-white"
                        type="text"
                        placeholder="Sua cidade"
                        required
                        value="São Paulo"
                        //onChange={event => {}}
                    />
                </label>
                <label className="form-label">
                    Sobre
                    <textarea
                        className="form-input bg-white h-[250px] overflow-w"
                        placeholder="Escreva sua mensagem."
                        required
                        value="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
                        //onChange={event => {}}
                    />
                </label>
                <button type="submit" className="btn m-auto">Salvar</button>
            </form>
        </main >
    )
};
export default Profile; 