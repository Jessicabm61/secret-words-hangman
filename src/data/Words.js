import LeaoImage from './img/Leao.jpg';
import GolfinhoImage from './img/Golfinho.jpg';
import ElefanteImage from './img/Elefante.jpeg';
import EsquiloImage from './img/Esquilo.jpeg';
import OvelhaImage from './img/Ovelha.jpeg';
import TartarugaImage from './img/Tartaruga.jpg';
import VacaImage from './img/Vaca.jpg';
import OrangeImage from './img/Orange.jpg';
import PeachImage from './img/Peach.jpg';
import AppleImage from './img/Apple.jpg';
import FootballImage from './img/Football.jpg';
import BasketballImage from './img/Basketball.jpg';
import TennisImage from './img/Tennis.jpg';
import SwimmingImage from './img/Swimming.jpg';
import DoctorImage from './img/Doctor.jpg';
import TeacherImage from './img/Teacher.jpg';
import EngineerImage from './img/Engineer.jpg';
import PilotImage from './img/Pilot.jpg';

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
    ],
    Esportes: [
        { name: 'Football', imagem: FootballImage },
        { name: 'Basketball', imagem: BasketballImage },
        { name: 'Tennis', imagem: TennisImage },
        { name: 'Swimming', imagem: SwimmingImage },
    ],
    Profissoes: [
        { name: 'Doctor', imagem: DoctorImage },
        { name: 'Teacher', imagem: TeacherImage },
        { name: 'Engineer', imagem: EngineerImage },
        { name: 'Pilot', imagem: PilotImage },
    ]
};

export default wordCategories;
