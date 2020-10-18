import React from 'react';import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CardHeader, Grid } from '@material-ui/core';

export default function Personal() {
    return (
    <Card>
        <CardHeader
            title="Enter Your Personal Details Here"
            subheader="School Registration details">
            
        </CardHeader>
        <CardContent>
            <form> 
                <Grid container direction="row" spacing={6} alignItems="stretch">
                    <Grid item >
                        <TextField
                        // id="standard-full-width"
                        label="SEMESTER"
                        style={{ margin: 8 }}
                        placeholder="Semester"
                        helperText="Enter Semester Here"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                        // id="standard-full-width"
                        label="YEAR"
                        style={{ margin: 8}}
                        placeholder="Year"
                        helperText="Current Year"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        // id="standard-full-width"
                        label="KASNEB/KISM/CHRP REG"
                        style={{ margin: 8 }}
                        placeholder="Registration Number"
                        helperText="Enter your Reg No"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        // id="standard-full-width"
                        label="ADMISSION NUMBER"
                        style={{ margin: 8}}
                        placeholder="Admission number"
                        helperText="Enter your Admission No"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item >
                        <TextField
                            id="outlined-secondary"
                            label="Surname"
                            size="small"
                            style={{ margin: 8 }}
                            placeholder="Surname"
                            variant="outlined"
                        helperText="Enter Surname Here"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="outlined-secondary"
                            label="Other Name"
                            size="small"
                            style={{ margin: 8 }}
                            placeholder="Other Name"
                            variant="outlined"
                        helperText="Enter Other Names Here"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="select-gender"
                            select
                            style={{ margin: 8 }}
                            label="Gender"
                            size="small"
                            helperText="Select your Gender"
                            
                            variant="outlined"
                        >
                        <option > Male </option>
                        <option > Female </option>

                        </TextField>
                    </Grid>  
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        id="outlined-secondary"
                        label="Postal Address"
                        size="small"
                        style={{ margin: 8 }}
                        placeholder="Postal Address"
                        variant="outlined"
                        helperText="Enter your Postal Address"
                    />
                </Grid>
                <Grid item>    
                    <TextField
                        id="outlined-secondary"
                        label="Postal Code"
                        style={{ margin: 8 }}
                        placeholder="Postal Code"
                        size="small"
                        variant="outlined"
                        helperText="Enter your Postal Code"
                    />
                </Grid>
                <Grid item>    
                    <TextField
                        id="outlined-secondary"
                        label="Town"
                        size="small"
                        style={{ margin: 8 }}
                        placeholder="Town"
                        variant="outlined"
                        helperText="Enter Town"
                    />    
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        id="outlined-secondary"
                        label="Mobile Number"
                        size="small"
                        style={{ margin: 8 }}
                        placeholder="Mobile Number"
                        variant="outlined"
                        helperText="Enter your Mobile Number No"
                    />
                </Grid>
                <Grid item>    
                    <TextField
                        id="outlined-secondary"
                        label="Office/Home Tel"
                        style={{ margin: 8 }}
                        placeholder="Home Number"
                        size="small"
                        variant="outlined"
                        helperText="Enter your Home Tel No"
                    />
                </Grid>
                <Grid item>    
                    <TextField
                        id="outlined-secondary"
                        label="Email"
                        size="small"
                        style={{ margin: 8 }}
                        placeholder="Email"
                        variant="outlined"
                        helperText="Enter your Email Address No"
                    />    
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        id="outlined-secondary"
                        label="Date of Birth"
                        size="small"
                        style={{ margin: 8 }}
                        placeholder="D.O.B"
                        variant="outlined"
                        helperText="Enter your Date of Birth"
                    />
                </Grid>
                <Grid item>    
                    <TextField
                        id="outlined-secondary"
                        label="Nationality"
                        style={{ margin: 8 }}
                        placeholder="nationality"
                        size="small"
                        variant="outlined"
                        helperText="Enter your Nationality"
                    />
                </Grid>
                <Grid item>    
                    <TextField
                        id="outlined-secondary"
                        label="ID/PASSPORT"
                        size="small"
                        style={{ margin: 8 }}
                        placeholder="ID/Passport Number"
                        variant="outlined"
                        helperText="Enter your ID No"
                    />    
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        id="outlined-secondary"
                        label="Parent/Guardian"
                        style={{ margin: 8 }}
                        placeholder="Parent/Guardian"
                        size="small"
                        variant="outlined"
                        helperText="Enter your Guardian's Name"
                        />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-secondary"
                        label="Phone Number"
                        style={{ margin: 8 }}
                        placeholder="Phone Number"
                        size="small"
                        variant="outlined"
                        helperText="Enter your Guardian's Number"
                    />
                </Grid>
            </Grid>

          </form>
        
        </CardContent>
      </Card>
    )
}
