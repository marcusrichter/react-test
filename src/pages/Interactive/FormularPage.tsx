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
            <div className="row mt-3 mb-3"></div>
            <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        <div className="d-flex justify-content-between">
                            <div className="contact-form-gender">
                                <FormControl>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="Gender" name="gender">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className="d-flex flex-column contact-form-address">
                                <span className="font-weight-bold mb-2">Lorem Ipsum AG</span>
                                <span>Neustrasse 1</span>
                                <span>5000 Köln</span>
                                <span>0221/500000</span>
                            </div>
                        </div>
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
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox value='yes' />}label='Datenschutzhinweise bestätigen' />
                                </FormGroup>
                            </FormControl>
                        </fieldset>    

                        <br></br>

                        <Button variant="raised" type="reset">Senden</Button>
                    </form>
                </div>
            </div>
            <div className="row mt-3 mb-3"></div>
        </GreyContainer>
    </>
};
