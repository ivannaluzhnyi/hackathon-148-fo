import wording from './wording.json';
import { Select } from 'Types';
import AuthService from '../services/auth-service';

const removeDuplicates = (array: any[], key: string) => {
    return array.reduce((accumulator, element) => {
        if (!accumulator.find((el: any) => el[key] === element[key])) {
            accumulator.push(element);
        }
        return accumulator;
    }, []);
};

const getOptionSkills = (categories: Select[], selectedSkills: Select[]) => {
    const allSkills: Select[] = [];

    categories.forEach(ct => {
        (wording.skillsOutilsOptions as any)[ct.value].forEach((ct: Select) => {
            if (
                !selectedSkills.find(ob => ob.value === ct.value) ? true : false
            ) {
                allSkills.push(ct);
                return;
            }
        });
    });
    return allSkills.sort(
        (a, b) => -b.label.charAt(0).localeCompare(a.label.charAt(0)),
    );
};

const getPathnameByUser = () => {
    const ut = AuthService.getUserType();
    switch (ut) {
        case 'admin':
            return 'admin-space';

        case 'customer':
            return 'client-space';

        default:
            return 'client-space';
    }
};

export { getOptionSkills, removeDuplicates, getPathnameByUser };
