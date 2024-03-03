import { Link } from 'react-router-dom';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { IPet } from "../../shares/interface/IPet";



const Pet = (
    {
        name,
        age,
        size,
        temperament,
        city, image
    }: IPet) => {

    return (
        <li className="bg-gray-light w-full flex items-center gap-5 p-4 max-w-[360px]">
            <img src={image} />
            <div>
                <h3 className="text-base font-600 text-primary first-letter:uppercase mb-2">{name}</h3>
                <p className="text-sm font-400 text-gray-dark">{age}</p>
                <p className="text-sm font-400 text-gray-dark">{size}</p>
                <p className="text-sm font-400 text-gray-dark">{temperament}</p>
                <p className="text-xs font-400 text-gray-dark mt-6 mb-2">{city}</p>
                <Link
                    to='/mensagem'
                    className="flex items-top gap-1 text-[10px] font-400 text-gray-dark"
                >
                    <ChatBubbleLeftEllipsisIcon className="w-6 text-secondary" />
                    Falar com responsável
                </Link>
            </div>
        </li>
    );
};
export default Pet;
