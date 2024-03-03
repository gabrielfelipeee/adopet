

import Pet from "../../components/Pet";
import { pets } from "./pets";


const Home = () => {

    return (
        <div className="grid justify-center">
            <h2
                className="font-400 text-base text-primary text-center m-auto w-[50%] max-w-[400px] mb-6 -mt-28 md:text-lg"
            >
                <span className="md:block">Olá!</span> Veja os amigos disponíveis para adoção!
            </h2>
            <ul className="flex gap-4 flex-wrap items-center justify-center max-w-[1112px] md:mx-10 md:mb-8">
                {
                    pets.map((pet, index) => <Pet key={index} {...pet} />)
                }
            </ul>
        </div>
    );
};
export default Home;