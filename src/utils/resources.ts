import TestSvg from '../assets/icons/test.jpg';
import IconLogo148 from '../assets/icons/logo-148.png';

import AdwLogoWhite from '../assets/icons/adw-logo-white.svg';
import AdwLogoBlack from '../assets/icons/adw-logo-black.svg';

import IconBgConnexion from '../assets/icons/bg-connexion.svg';

import Quote from '../assets/icons/quote.svg';

import Bg1OnePage from '../assets/icons/bg-1-onepage.svg';

export enum EResource {
    LOGO_148 = 'logo-148',
    TestSvg = 'ic-test',
    BG_CONNEXION = 'ic-bg-connexion',
    ADW_LOGO_WHITE = 'adw-logo-white',
    ADW_LOGO_BALCK = 'adw-logo-black',
    BG_1_ONEPAGE = 'bg-1-onepage',
    Quote = 'ic-quote',
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
};
