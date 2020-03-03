import React from 'react';

import resources, { EResource, Resources } from '../utils/resources';

export interface Icon {
    type: EResource;
    w?: string | number;
    h?: string | number;
}
const getSrc = (type: EResource) => {
    return (resources as Resources)[type as any];
};
const Icon: React.FC<Icon> = ({ type, h, w }) => {
    return <img height={h} width={w} src={getSrc(type)} alt={type as string} />;
};

export default Icon;
