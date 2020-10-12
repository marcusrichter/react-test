import React, { useState } from 'react';
import GreyContainer from './../../pageElements/Containers/GreyContainer';
import { useForm } from 'react-hook-form';
import { FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Checkbox, FormHelperText, RadioGroup, Radio } from '@material-ui/core';
import Button from '../../pageElements/Buttons/Button';
import WhiteContainerSmall from '../../pageElements/Containers/WhiteContainerSmall';
import NumberingCard from './../../pageElements/Cards/NumberingCard';
import ReactHookFormSelect from './../../pageElements/Form/ReactHookFormSelect';
import LightGreyContainer from '../../pageElements/Containers/LightGreyContainer';
import IFormEntry from '../../entities/IFormEntry';
import { Element, scroller } from 'react-scroll';

export default () => {
    const { register, handleSubmit, errors, control } = useForm();

    const [entries, setEntries] = useState<IFormEntry[]>(new Array<IFormEntry>());

    const onSubmit = (data: any) => {        
        setEntries([...entries, data]);
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
                                        <FormControlLabel value="female" control={<Radio />} label="Female" inputRef={register} />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" inputRef={register} />
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
                        <TextField label="Vorname" type="text" name="firstname" data-validators="isRequired,isAlpha" fullWidth={true} inputRef={register}/>
                        <TextField label="Nachname" type="text" name="lastname" data-validators="isRequired,isAlpha" fullWidth={true} inputRef={register}/>
                        <TextField label="EMail" type="text" name="email" data-validators="isRequired,isAlpha" fullWidth={true} inputRef={register}/>
                        <FormControl required  fullWidth={true}>
                            <InputLabel>Alter</InputLabel>
                            <ReactHookFormSelect name="age" control={control}>
                                <MenuItem value=""><em>Bitte das Alter auswählen ...</em></MenuItem>
                                <MenuItem value={18} key={18}>18 - 25</MenuItem>
                                <MenuItem value={26} key={26}>26 - 35</MenuItem>
                                <MenuItem value={36} key={36}>36+</MenuItem>                                
                            </ReactHookFormSelect>
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

                        <Button variant="raised" submit={true}>Senden</Button>
                    </form>
                </div>
            </div>
            <div className="row pt-3 pb-3"></div>
        </GreyContainer>
        <LightGreyContainer>
            <div className="row pt-5 pb-5">
                <div className="mx-auto text-center">
                    <h2 className="mb-4 mt-3" data-aos="fade-down" data-aos-duration="1000">Formular Eingaben</h2>
                    <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
                </div>
            </div>
        </LightGreyContainer>
        <WhiteContainerSmall>
            <Element name="myScrollToElement"></Element>
            <div className="row mb-5 mt-5">
                {entries.map(entry =>
                    <NumberingCard number={1} title="Eingabe">
                        xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx
                    </NumberingCard>     
                )}          
            </div>    
        </WhiteContainerSmall>
    </>
};
