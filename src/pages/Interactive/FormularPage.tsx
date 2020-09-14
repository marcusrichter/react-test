import React from 'react';
import WhiteContainerSmall from './../../pageElements/Containers/WhiteContainerSmall';
import { useForm } from 'react-hook-form';
import { FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Checkbox, FormHelperText, RadioGroup, Radio } from '@material-ui/core';
import Button from '../../pageElements/Buttons/Button';

export default () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <>
    <WhiteContainerSmall>
        <div className="row">
            <div className="mx-auto text-center">
                <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">Formular Test</h2>
                <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
            </div>    
        </div>
        <div className="row mt-5 mb-5"></div>
        <div className="row">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Name" type="text" name="name" value="" data-validators="isRequired,isAlpha" />
                <fieldset>
                    <FormControl>
                        {/* form label is required here to perform default validations */}
                        <FormLabel component="legend">I love React material UI form</FormLabel>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox value='yes' />}
                            label='I love React material UI form'/>
                        </FormGroup>
                    </FormControl>
        
                    <FormControl required>
                    <InputLabel>Age</InputLabel>
                    <Select value="" name="age">
                        <MenuItem value=""><em>Please select your age ...</em></MenuItem>
                        <MenuItem value={10}>Teens</MenuItem>
                        <MenuItem value={20}>Twenties</MenuItem>
                        <MenuItem value={30}>Thirties</MenuItem>
                        <MenuItem value="40+">Fourties +</MenuItem>
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl> 
                </fieldset>
                
                <FormControl>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="Gender" name="gender"  value="male">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" /> 
                    </RadioGroup>
                </FormControl>
                
                <Button variant="raised" type="reset">Reset</Button>
                <Button variant="raised" type="submit">Submit</Button>
            </form>
        </div>
    </WhiteContainerSmall>    
</>
};
