import React, { useState } from 'react';
import styled from 'styled-components';
import ValidateButton from './ValidateButton';

import { Grid, Checkbox, TextField } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { Select } from 'Types';
import Autocomplete from '@material-ui/lab/Autocomplete';

import wording from '../../utils/wording.json';

const Form = styled.form`
    width: 80%;
`;

const GridItem: React.FC<any> = props => {
    const StyledG = styled(Grid)`
        border: ${(props: any) =>
            props.active ? 'solid 3px #6A98FD' : 'solid 2px grey'};
        border-radius: 8px;
        cursor: pointer;
        margin: auto;
        width: 150px;
        height: 99px;
    `;

    return <StyledG {...props}>{props.children}</StyledG>;
};

const Wrapper = styled(Grid)`
    margin-bottom: 40px;
`;

const SelectGridItem = styled(Grid)`
    padding: 0 20px;
    /* margin: auto; */
    width: 100%;
`;

const icon = <CheckBoxOutlineBlankIcon color="primary" fontSize="small" />;
const checkedIcon = <CheckBoxIcon color="primary" fontSize="small" />;

const SectorTextItem: React.FC<any> = props => {
    const StyledDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 100%;
        font-weight: ${(props: any) => (props.isActive ? 500 : 400)};
    `;

    return (
        <StyledDiv isActive={props.isActive} {...props}>
            {props.children}
        </StyledDiv>
    );
};

const Sector: React.FC<{ handelValidateScreen: (props: any) => void }> = ({
    handelValidateScreen,
}) => {
    const [sector, setSector] = useState<Select | undefined>();
    const [sectorCategories, setSectorCategories] = useState<Select[]>([]);

    const condition = sector !== undefined && sectorCategories.length !== 0;

    const handelClick = (e: any) => {
        e.preventDefault();

        if (condition) {
            handelValidateScreen({
                sector: {
                    value: sector?.value,
                    categories: sectorCategories,
                },
            });
        }
    };

    return (
        <Form onSubmit={handelClick}>
            <h2>Votre secteur</h2>
            <h4>
                Sélectionnez vos secteurs corespondant à votre domaine
                d'acticvité.
            </h4>
            {wording.sectorsList.map((array, idx) => (
                <Wrapper
                    key={idx}
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    {array.map((st, idx) => {
                        const isActive = sector && sector.value === st.value;
                        return (
                            <Grid key={idx} item>
                                <GridItem
                                    onClick={() =>
                                        setSector(isActive ? undefined : st)
                                    }
                                    active={isActive}
                                >
                                    <SectorTextItem isActive={isActive}>
                                        {st.label}
                                    </SectorTextItem>
                                </GridItem>
                            </Grid>
                        );
                    })}

                    {sector &&
                        array.find(a => a.value === sector.value) !==
                            undefined && (
                            <Grid container>
                                <SelectGridItem item xs md>
                                    <Autocomplete
                                        multiple
                                        options={
                                            (wording.sectoreCategoryOptions as any)[
                                                sector.value
                                            ] || []
                                        }
                                        size="small"
                                        disableCloseOnSelect
                                        getOptionLabel={option => option.label}
                                        renderOption={(
                                            option,
                                            { selected },
                                        ) => (
                                            <React.Fragment>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                    color="primary"
                                                />
                                                {option.label}
                                            </React.Fragment>
                                        )}
                                        onChange={(e: any, value: any) =>
                                            setSectorCategories(
                                                value !== null ? value : [],
                                            )
                                        }
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                label="Catégorie"
                                            />
                                        )}
                                    />
                                </SelectGridItem>
                            </Grid>
                        )}
                </Wrapper>
            ))}
            <ValidateButton
                disabled={!condition}
                onClick={handelClick}
                text="SUIVANt"
            />
        </Form>
    );
};

export default Sector;
