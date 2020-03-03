import TestSvg from '../assets/icons/test.jpg';
import IconLogo148 from '../assets/icons/logo-148.png';

export enum EResource {
    LOGO_148 = 'logo-148',
    TestSvg = 'ic-test',
}

export interface Resources {
    [key: string]: string;
}

export default {
    'ic-test': TestSvg,
    'logo-148': IconLogo148,
};