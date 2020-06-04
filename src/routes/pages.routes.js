import Home from '../containers/Home/Home';
import Notes from '../containers/Notes/Notes';
import LoremIpsumGenerator from '../containers/LoremIpsumGenerator/LoremIpsumGenerator';
import ToDo from '../containers/ToDo/ToDo';
import Login from '../containers/Login/Login';
import Timers from '../containers/Timers/Timers';
import Quiz from '../containers/Quiz/Quiz';
import QuizResults from '../containers/Quiz/QuizResults/QuizResults';

export const PAGES_ROUTES = [
    { path: '/', component: Home,name: 'Home', exact: true, inNavigation: true },
    { path: '/notes', component: Notes, name:'Notes', exact: false, inNavigation: true },
    { path: '/lorem-ipsum-generator', component: LoremIpsumGenerator, name:'Lorem Ipsum Generator', exact: false, inNavigation: true },
    { path: '/to-do', component: ToDo, name:'To Do', exact: false, inNavigation: true },
    { path: '/login', component: Login, name:'Login', exact: true, inNavigation: true },
    { path: '/timers', component: Timers, name:'Timers', exact: false, inNavigation: true },
    { path: '/quiz', component: Quiz, name:'Quiz', exact: false, inNavigation: true },
    { path: '/quiz-results', component: QuizResults, name:'Quiz Results', exact: false, inNavigation: false },
];
