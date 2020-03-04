import React, { useState } from 'react';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';

import wording from '../../utils/wording.json';

import {
    makeStyles,
    List,
    Grid,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Button as UIButton,
} from '@material-ui/core';
import Button from '../Button';
import { Select } from 'Types';
import { getOptionSkills } from '../../utils/helper';

interface SkillState extends Select {
    expirienceLevel?: string | number;
}

interface SkillFunc {
    onDelete: (value: string) => void;
    handleLevelChange: (props: {
        lvlValue: string | number;
        objValue: string;
    }) => void;
}

interface SkillProps extends SkillFunc {
    obj: Select;
}

interface SkillListProps extends SkillFunc {
    skills: Select[];
}

const Form = styled.form`
    width: 80%;
`;

const ListRightGrid = styled(Grid)`
    position: relative;
`;

const LvlSkillItem = styled(Grid)`
    text-align: center;
`;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyleProffesion = makeStyles({
    select: {
        zIndex: 2,
        margin: '20px 0px',
    },
    lvlSkillItem: {
        textAlign: 'center',
    },
});

const defeaultExpirience = wording.levelOfExpirience[0];
const defeaultTypeUser = wording.typeUser[0];

const Skill: React.FC<SkillProps> = ({ obj, onDelete, handleLevelChange }) => {
    const [selected, setSelected] = useState<number>(0);
    if (obj === null) return null;

    const { label, value } = obj;

    const renderLvlSkill = () => {
        const values = [1, 2, 3];

        return (
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                {values.map((val, idx) => (
                    <LvlSkillItem key={idx} item md>
                        <UIButton
                            onClick={() => {
                                setSelected(val);
                                handleLevelChange({
                                    objValue: value,
                                    lvlValue: val,
                                });
                            }}
                            variant={
                                selected === val ? 'contained' : 'outlined'
                            }
                            color="primary"
                        >
                            {val}
                        </UIButton>
                    </LvlSkillItem>
                ))}
            </Grid>
        );
    };

    return (
        <ListItem>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <ListRightGrid item md={7} xs={7}>
                    <ListItemText primary={label} />
                    <ListItemSecondaryAction>
                        <IconButton
                            onClick={() => onDelete(value)}
                            edge="end"
                            aria-label="delete"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListRightGrid>

                <Grid item md={5} xs={5}>
                    {renderLvlSkill()}
                </Grid>
            </Grid>
        </ListItem>
    );
};

const SkillList: React.FC<SkillListProps> = ({ skills, ...rest }) => {
    return (
        <Grid item xs={12}>
            <div>
                <List>
                    {skills.map((ct, idx) => (
                        <Skill key={idx} obj={ct} {...rest} />
                    ))}
                </List>
            </div>
        </Grid>
    );
};

const Proffesion = () => {
    const [expirience, setExpirience] = useState<Select>(defeaultExpirience);
    const [typeUser, setTypeUser] = useState<Select>(defeaultTypeUser);
    const [categories, setCategories] = useState<Select[]>([]);
    const [skills, setSkills] = useState<SkillState[]>([]);

    const classes = useStyleProffesion();

    console.log('categories = >', categories);
    console.log('skils = >', skills);
    console.log('expirience = >', expirience);
    console.log('typeUser = >', typeUser);

    const handleRemoveSkill = (value: string) => {
        const newSkiils = skills.filter(s => s.value !== value);
        setSkills(newSkiils);
    };

    const handleLevelChange = ({
        lvlValue,
        objValue,
    }: {
        lvlValue: string | number;
        objValue: string;
    }) => {
        const foundIndex = skills.findIndex(x => x.value === objValue);
        const finedSkill = skills[foundIndex];
        const newSkiils = skills;
        newSkiils[foundIndex] = {
            ...finedSkill,
            expirienceLevel: lvlValue,
        };
        setSkills(newSkiils);
    };

    const renderExpirience = () => (
        <Autocomplete
            id="size-small-outlined"
            size="small"
            options={wording.levelOfExpirience}
            getOptionLabel={option => option.label}
            defaultValue={defeaultExpirience}
            onChange={(e: any, value: any) => setExpirience(value)}
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
            className={classes.select}
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
                setCategories(value !== null ? value : [])
            }
            renderInput={params => (
                <TextField {...params} variant="outlined" label="Catégorie" />
            )}
        />
    );

    const renderTypeUser = () => (
        <Autocomplete
            id="size-small-outlined"
            size="small"
            className="select-margin"
            options={wording.typeUser}
            getOptionLabel={option => option.label}
            defaultValue={defeaultTypeUser}
            onChange={(e: any, value: any) => setTypeUser(value)}
            renderInput={params => (
                <TextField {...params} variant="outlined" label="Vous etes ?" />
            )}
        />
    );

    const renderSkills = () => (
        <Autocomplete
            size="small"
            options={getOptionSkills(categories, skills)}
            groupBy={option => option.label.charAt(0)}
            getOptionLabel={option => option.label}
            onChange={(e: any, value: any) => {
                setSkills(value !== null ? [...skills, value] : []);
            }}
            disabled={categories.length === 0}
            value={null}
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

            <Grid
                className={classes.select}
                container
                direction="row"
                justify="space-between"
            >
                <Grid item xs={12} md={7}>
                    {renderTypeUser()}
                </Grid>
                <Grid item xs={12} md={4}>
                    {renderExpirience()}
                </Grid>
            </Grid>

            <Grid>{renderCategory()}</Grid>
            <Grid>{renderSkills()}</Grid>
            <Grid></Grid>

            <SkillList
                skills={skills}
                onDelete={handleRemoveSkill}
                handleLevelChange={handleLevelChange}
            />

            <Button
                variant="contained"
                onClick={() => console.log('validate proffesion')}
            >
                SUIVANt
            </Button>
        </Form>
    );
};

export default Proffesion;
