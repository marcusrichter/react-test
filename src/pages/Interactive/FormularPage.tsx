import React from 'react';
import GreyContainer from './../../pageElements/Containers/GreyContainer';
import { useForm } from 'react-hook-form';
import { FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Checkbox, FormHelperText, RadioGroup, Radio } from '@material-ui/core';
import Button from '../../pageElements/Buttons/Button';

export default () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <>
        <GreyContainer>
            <div className="row">
                <div className="mx-auto text-center">
                    <h2 className="mb-4 mt-5" data-aos="fade-down" data-aos-duration="1000">Formular Test</h2>
                    <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
                </div>
            </div>
            <div className="row mt-5 mb-5"></div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField label="Vorname" type="text" name="firstname" data-validators="isRequired,isAlpha" fullWidth={true}/>
                        <TextField label="Nachname" type="text" name="lastname" data-validators="isRequired,isAlpha" fullWidth={true}/>
                        <TextField label="EMail" type="text" name="email" data-validators="isRequired,isAlpha" fullWidth={true}/>
                        <FormControl required  fullWidth={true}>
                            <InputLabel>Age</InputLabel>
                            <Select name="Alter">
                                <MenuItem value=""><em>Bitte das Alter auswählen ...</em></MenuItem>
                                <MenuItem value={18}>18 - 25</MenuItem>
                                <MenuItem value={26}>26 - 35</MenuItem>
                                <MenuItem value={36}>36+</MenuItem>                                
                            </Select>
                            <FormHelperText>Mindestalter 18</FormHelperText>
                        </FormControl>

                        <fieldset>
                            <FormControl fullWidth={true}>
                                {/* form label is required here to perform default validations */}
                                <FormLabel component="legend">I love React material UI form</FormLabel>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox value='yes' />}
                                        label='I love React material UI form' />
                                </FormGroup>
                            </FormControl>


                        </fieldset>

                        <FormControl>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="Gender" name="gender" value="male">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>

                        <br></br>

                        <Button variant="raised" type="reset">Reset</Button>
                        <Button variant="raised" type="submit">Submit</Button>
                    </form>
                </div>

            </div>
        </GreyContainer>
    </>
};
