
interface ParagraphProps {
    isMobile: boolean
}

const Paragraph = ({ isMobile }: ParagraphProps) => {
    return (
        <p
            className={`${isMobile ? 'w-[54%]' : 'w-[43%]'} max-w-[400px] text-base font-400 text-center mb-8 md:text-lg`}
        >
            {isMobile
                ?
                "Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!"
                :
                "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
            }
        </p>
    );
}
export default Paragraph;
