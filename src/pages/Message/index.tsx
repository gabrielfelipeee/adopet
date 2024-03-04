const Message = () => {
    return (
        <main className="grid justify-center lg:ly-pages-desktop lg:h-screen lg:-mt-[470px]">
            <span
                className="text-base font-400 text-primary text-center w-[65%] max-w-[524px] mx-auto -mt-28 md:text-lg lg:mt-24"
            >
                Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
            </span>
            <form className="form mb-8">
                <label className="form-label">
                    Nome
                    <input
                        className="form-input bg-white"
                        type="text"
                        placeholder="Insira seu nome completo"
                        required
                    />
                </label>
                <label className="form-label">
                    Telefone
                    <input
                        className="form-input bg-white"
                        type="text"
                        placeholder="Insira seu telefone/whatsApp"
                        required
                    />
                </label>
                <label className="form-label">
                    Nome do animal
                    <input
                        className="form-input bg-white"
                        type="text"
                        placeholder="Por qual animal você se interessou?"
                        required
                    />
                </label>
                <label className="form-label">
                    Mensagem
                    <textarea
                        className="form-input bg-white h-[250px] overflow-w"
                        placeholder="Escreva sua mensagem."
                        required
                    />
                </label>
                <button type="submit" className="btn m-auto">Enviar</button>
            </form>
        </main >
    )
};
export default Message; 