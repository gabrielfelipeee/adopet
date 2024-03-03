import dunga from '../../assets/pets/dunga.svg';
import felicia from '../../assets/pets/felícia.svg';
import sirius from '../../assets/pets/sirius.svg';
import fiona from '../../assets/pets/fiona.svg';
import sid from '../../assets/pets/sid.svg';
import yoda from '../../assets/pets/yoda.svg';
import lua from '../../assets/pets/lua.svg';
import amora from '../../assets/pets/amora.svg';
import zelda from '../../assets/pets/zelda.svg';

import { IPet } from '../../shares/interface/IPet';

const pets: IPet[] = [
    {
        "name": "dunga",
        "age": "2 anos",
        "size": "Porte pequeno",
        "temperament": "Calmo e educado",
        "city": "Rio de Janeiro (RJ)",
        "image": dunga
    },
    {
        "name": "felícia",
        "age": "3 meses",
        "size": "Porte pequeno",
        "temperament": "Ativa e carinhosa",
        "city": "Nova Iguaçu (RJ)",
        "image": felicia
    },
    {
        "name": "sirius",
        "age": "6 meses",
        "size": "Porte grande",
        "temperament": "Ativo e educado",
        "city": "Duque de Caxias (RJ)",
        "image": sirius
    },
    {
        "name": "fiona",
        "age": "3 anos",
        "size": "Porte pequeno",
        "temperament": "Calma e educada",
        "city": "São Gonçalo (RJ)",
        "image": fiona
    },
    {
        "name": "sid",
        "age": "8 meses",
        "size": "Porte médio/grande",
        "temperament": "Brincalhão e amável",
        "city": "Rio de Janeiro (RJ)",
        "image": sid
    },
    {
        "name": "yoda",
        "age": "1 ano",
        "size": "Porte médio",
        "temperament": "Ativo e carinhoso",
        "city": "Nova Iguaçu (RJ)",
        "image": yoda
    },
    {
        "name": "lua",
        "age": "6 meses",
        "size": "Porte médio",
        "temperament": "Ativa e carinhosa",
        "city": "Duque de Caxias (RJ)",
        "image": lua
    },
    {
        "name": "amora",
        "age": "45 dias",
        "size": "Porte grande",
        "temperament": "Calma e carinhosa",
        "city": "São Gonçalo (RJ)",
        "image": amora
    },
    {
        "name": "zelda",
        "age": "5 meses",
        "size": "Porte médio",
        "temperament": "Ativa e amável",
        "city": "Rio de Janeiro (RJ)",
        "image": zelda
    }
];

export { pets };
