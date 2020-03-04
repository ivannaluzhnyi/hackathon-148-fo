import React from 'react';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import wording from '../../utils/wording.json';
import { makeStyles } from '@material-ui/core';

const Form = styled.form`
    width: 80%;
`;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyleProffesion = makeStyles({
    expirience: {
        zIndex: 2,
        margin: '20px 0',
    },

    categories: {
        zIndex: 2,
        margin: '20px 0',
        backgroundColor: 'white',
    },
});

const Proffesion = () => {
    const classes = useStyleProffesion();

    const renderExpirience = () => (
        <Autocomplete
            id="size-small-outlined"
            size="small"
            className={classes.expirience}
            options={wording.levelOfExpirience}
            getOptionLabel={option => option.label}
            defaultValue={wording.levelOfExpirience[0]}
            onChange={(e: any, value: any) =>
                console.log('renderExpirience => ', value)
            }
            renderInput={params => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Niveau d'expérience"
                />
            )}
        />
    );

    const renderCategory = () => (
        <Autocomplete
            multiple
            options={wording.categoriesOptions}
            className={classes.categories + 'autocomplete '}
            size="small"
            disableCloseOnSelect
            getOptionLabel={option => option.label}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.label}
                </React.Fragment>
            )}
            onChange={(e: any, value: any) =>
                console.log('renderCategory => ', value)
            }
            renderInput={params => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Vous etes ? "
                />
            )}
        />
    );

    const renderSkiils = () => (
        <Autocomplete
            size="small"
            options={wording.skilsOutilsOptions.back_end_developer.sort(
                (a, b) => -b.label.charAt(0).localeCompare(a.label.charAt(0)),
            )}
            groupBy={option => option.label.charAt(0)}
            getOptionLabel={option => option.label}
            onChange={(e: any, value: any) =>
                console.log('renderSkiils => ', value)
            }
            renderInput={params => (
                <TextField
                    {...params}
                    label="Spécialité / Outils"
                    variant="outlined"
                />
            )}
        />
    );

    return (
        <Form>
            <h3>Votre métier</h3>

            {renderCategory()}
            {renderExpirience()}
            {renderSkiils()}
        </Form>
    );
};

export default Proffesion;
