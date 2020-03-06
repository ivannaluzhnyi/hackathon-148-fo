import React from 'react';

import resources, {
    EResource,
    Resources,
    EResourceCompletedProject,
} from '../utils/resources';

export type TIcon = EResource | EResourceCompletedProject;

export interface Icon {
    type: TIcon;
    w?: string | number;
    h?: string | number;
}

const getSrc = (type: TIcon) => {
    return (resources as Resources)[type as any];
};
const Icon: React.FC<Icon> = ({ type, h, w }) => {
    return <img height={h} width={w} src={getSrc(type)} alt={type as string} />;
};

export default Icon;
