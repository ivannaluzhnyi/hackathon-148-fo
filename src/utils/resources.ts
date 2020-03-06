import TestSvg from '../assets/icons/test.jpg';
import IconLogo148 from '../assets/icons/logo-148.png';

import AdwLogoWhite from '../assets/icons/adw-logo-white.svg';
import AdwLogoBlack from '../assets/icons/adw-logo-black.svg';

import IconBgConnexion from '../assets/icons/bg-connexion.svg';
import Quote from '../assets/icons/quote.svg';
import Bg1OnePage from '../assets/icons/bg-1-onepage.svg';

import Instagram from '../assets/icons/instagram.svg';
import Facebook from '../assets/icons/facebook.svg';
import Twitter from '../assets/icons/twitter.svg';

// SECTOR

import App from '../assets/icons/sector/app.svg';
import Buzz from '../assets/icons/sector/buzz.svg';
import Conseil from '../assets/icons/sector/conseil.svg';
import crea from '../assets/icons/sector/crea.svg';
import event from '../assets/icons/sector/event.svg';
import web from '../assets/icons/sector/web.svg';

// COMPLETED PROJECTS

import Respire from '../assets/completed-projects/Groupe 981.svg';
import SosHomophobie from '../assets/completed-projects/Groupe 982.svg';
import Alimetier from '../assets/completed-projects/Alimetier_projet.svg';
import Courseur from '../assets/completed-projects/Groupe 984.svg';
import FruitsDetendus from '../assets/completed-projects/Groupe 985.svg';
import Metro from '../assets/completed-projects/metro.svg';

export enum EResource {
    LOGO_148 = 'logo-148',
    TestSvg = 'ic-test',
    BG_CONNEXION = 'ic-bg-connexion',
    ADW_LOGO_WHITE = 'adw-logo-white',
    ADW_LOGO_BALCK = 'adw-logo-black',
    BG_1_ONEPAGE = 'bg-1-onepage',
    Quote = 'ic-quote',

    Instagram = 'ic-inst',
    Facebook = 'ic-face',
    Twitter = 'ic-twit',

    App = 'ic-sector-app',
    Buzz = 'ic-sector-buzz',
    Conseil = 'ic-sector-conseil',
    crea = 'ic-sector-crea',
    event = 'ic-sector-event',
    web = 'ic-sector-web',
}

export enum EResourceCompletedProject {
    Respire = 'ic-completed-project-respire',
    SosHomophobie = 'ic-completed-project-homophobie',
    Alimetier = 'ic-completed-project-alimetier',
    Courseur = 'ic-completed-project-coursuer',
    FruitsDetendus = 'ic-completed-project-fruits-detendu',
    Metro = 'ic-completed-project-metro',
}

export interface Resources {
    [key: string]: string;
}

export default {
    'ic-test': TestSvg,
    'logo-148': IconLogo148,
    'adw-logo-white': AdwLogoWhite,
    'adw-logo-black': AdwLogoBlack,
    'bg-1-onepage': Bg1OnePage,
    'ic-quote': Quote,
    'ic-bg-connexion': IconBgConnexion,
    'ic-inst': Instagram,
    'ic-face': Facebook,
    'ic-twit': Twitter,

    'ic-sector-app': App,
    'ic-sector-buzz': Buzz,
    'ic-sector-conseil': Conseil,
    'ic-sector-crea': crea,
    'ic-sector-event': event,
    'ic-sector-web': web,

    'ic-completed-project-respire': Respire,
    'ic-completed-project-homophobie': SosHomophobie,
    'ic-completed-project-alimetier': Alimetier,
    'ic-completed-project-coursuer': Courseur,
    'ic-completed-project-fruits-detendu': FruitsDetendus,
    'ic-completed-project-metro': Metro,
};
