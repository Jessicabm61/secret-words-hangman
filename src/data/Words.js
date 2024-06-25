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
import SoccerImage from './img/Football.jpg';
import BasketballImage from './img/Basketball.jpg';
import TennisImage from './img/Tennis.jpg';
import SwimmingImage from './img/Swimming.jpg';
import DoctorImage from './img/Doctor.jpg';
import TeacherImage from './img/Teacher.jpg';
import EngineerImage from './img/Engineer.jpg';
import PilotImage from './img/Pilot.jpg';
import CachorroImage from './img/Dog.jpg'; // Adicionei esta linha para o 'Dog'
import PassaroImage from './img/Bird.jpg'; // Adicionei esta linha para o 'Bird'
import CobraImage from './img/Snake.jpg'; // Adicionei esta linha para o 'Snake'
import SapoImage from './img/Frog.jpg'; // Adicionei esta linha para o 'Frog'
import RunningImage from './img/Running.jpg'; // Adicionei esta linha para 'Running'
import GolfImage from './img/Golf.jpg'; // Adicionei esta linha para 'Golf'
import CyclingImage from './img/Cycling.jpg'; // Adicionei esta linha para 'Cycling'
import BaseballImage from './img/Baseball.jpg'; // Adicionei esta linha para 'Baseball'
import HockeyImage from './img/Hocky.jpg'; // Adicionei esta linha para 'Hockey'
import VolleyballImage from './img/Volleyball.jpg';
import BananaImage from './img/Banana.jpg'; // Adicionei esta linha para 'Banana'
import GrapesImage from './img/Grapes.jpg'; // Adicionei esta linha para 'Grapes'
import StrawberryImage from './img/Strawberry.jpg'; // Adicionei esta linha para 'Strawberry'
import WatermelonImage from './img/Watermelon.jpg'; // Adicionei esta linha para 'Watermelon'
import PineappleImage from './img/Pineapple.jpg'; // Adicionei esta linha para 'Pineapple'
import MangoImage from './img/Mango.jpg'; // Adicionei esta linha para 'Mango'

const wordCategories = {
    Animais: [
        { name: 'Lion', imagem: LeaoImage },
        { name: 'Dolphin', imagem: GolfinhoImage },
        { name: 'Elephant', imagem: ElefanteImage },
        { name: 'Squirrel', imagem: EsquiloImage },
        { name: 'Sheep', imagem: OvelhaImage },
        { name: 'Turtle', imagem: TartarugaImage },
        { name: 'Cow', imagem: VacaImage },
        { name: 'Dog', imagem: CachorroImage },
        { name: 'Bird', imagem: PassaroImage },
        { name: 'Snake', imagem: CobraImage },
        { name: 'Frog', imagem: SapoImage }
    ],
    Frutas: [
        { name: 'Apple', imagem: AppleImage },
        { name: 'Peach', imagem: PeachImage },
        { name: 'Orange', imagem: OrangeImage },
        { name: 'Banana', imagem: BananaImage },
        { name: 'Grapes', imagem: GrapesImage },
        { name: 'Strawberry', imagem: StrawberryImage },
        { name: 'Watermelon', imagem: WatermelonImage },
        { name: 'Pineapple', imagem: PineappleImage },
        { name: 'Mango', imagem: MangoImage }
    ],
    Esportes: [
        { name: 'Soccer', imagem: SoccerImage },
        { name: 'Basketball', imagem: BasketballImage },
        { name: 'Tennis', imagem: TennisImage },
        { name: 'Swimming', imagem: SwimmingImage },
        { name: 'Running', imagem: RunningImage },
        { name: 'Golf', imagem: GolfImage },
        { name: 'Cycling', imagem: CyclingImage },
        { name: 'Baseball', imagem: BaseballImage },
        { name: 'Hockey', imagem: HockeyImage },
        { name: 'Volleyball', imagem: VolleyballImage }
    ],
    Profissoes: [
        { name: 'Doctor', imagem: DoctorImage },
        { name: 'Teacher', imagem: TeacherImage },
        { name: 'Engineer', imagem: EngineerImage },
        { name: 'Pilot', imagem: PilotImage },
    ]
};

export default wordCategories;
