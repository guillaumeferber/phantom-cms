import Home from '../containers/Home/Home';
import Notes from '../containers/Notes/Notes';
import LoremIpsumGenerator from '../containers/LoremIpsumGenerator/LoremIpsumGenerator';
import ToDo from '../containers/ToDo/ToDo';
import Login from '../containers/Login/Login';
import Timers from '../containers/Timers/Timers';
import Quiz from '../containers/Quiz/Quiz';

export const PAGES_ROUTES = [
    { path: '/', component: Home,name: 'Home', exact: true },
    { path: '/notes', component: Notes, name:'Notes', exact: false },
    { path: '/lorem-ipsum-generator', component: LoremIpsumGenerator, name:'Lorem Ipsum Generator', exact: false },
    { path: '/to-do', component: ToDo, name:'To Do', exact: false },
    { path: '/login', component: Login, name:'Login', exact: true },
    { path: '/timers', component: Timers, name:'Timers', exact: false },
    { path: '/quiz', component: Quiz, name:'Quiz', exact: false },
];
