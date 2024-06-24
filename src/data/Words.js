import LeaoImage from './img/Leao.jpg';
import GolfinhoImage from './img/Golfinho.jpg';
import ElefanteImage from './img/Elefante.jpeg';
import EsquiloImage from './img/Esquilo.jpeg';
import OvelhaImage from './img/Ovelha.jpeg';
import TartarugaImage from './img/Tartaruga.jpg';
import VacaImage from './img/Vaca.jpg';
import OrangeImage from './img/Orange.jpg';
import PeachImage from './img/Peach.jpg';
import AppleImage from './img/Apple.jpg'


const wordCategories = {
    Animais: [
        { name: 'Lion', imagem: LeaoImage },
        { name: 'Dolphin', imagem: GolfinhoImage },
        { name: 'Elephant', imagem: ElefanteImage },
        { name: 'Squirrel', imagem: EsquiloImage },
        { name: 'Sheep', imagem: OvelhaImage },
        { name: 'Turtle', imagem: TartarugaImage },
        { name: 'Cow', imagem: VacaImage }
    ],
    Frutas: [
        { name: 'Apple', imagem: AppleImage },
        { name: 'Peach', imagem: PeachImage },
        { name: 'Orange', imagem: OrangeImage },
    ]
};
export default wordCategories;