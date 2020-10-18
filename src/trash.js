import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Grid } from '@material-ui/core';


export default function Course() {
    return (

    <Card display="flex">
      <CardContent>
        <Grid container direction="row">
          <FormLabel component="legend">Accountancy</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox  onChange name="male" />}
              label="CPA Part 1"
            />
            <FormControlLabel
              control={<Checkbox onChange name="female" />}
              label="CPA Part 2"
            />
            <FormControlLabel
              control={<Checkbox checked onChange name="other" />}
              label="CPA Part 3"
            />
            <FormControlLabel
              control={<Checkbox  onChange name="male" />}
              label="ATD Part 1"
            />
            <FormControlLabel
              control={<Checkbox onChange name="female" />}
              label="ATD Part 2"
            />
            <FormControlLabel
              control={<Checkbox checked onChange name="other" />}
              label="ATD Part 3"
            />
            <FormControlLabel
              control={<Checkbox onChange name="female" />}
              label="CAMS Level 1"
            />
            <FormControlLabel
              control={<Checkbox checked onChange name="other" />}
              label="CAMS Level 2"
            />
          </FormGroup>
          <FormLabel component="legend">FINANCE</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox  onChange name="male" />}
              label="CIFA Part 1"
            />
            <FormControlLabel
              control={<Checkbox onChange name="female" />}
              label="CIFA Part 2"
            />
            <FormControlLabel
              control={<Checkbox checked onChange name="other" />}
              label="CIFA Part 3"
            />
          </FormGroup>
          <FormLabel component="legend">GOVERNANCE & MGT</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox  onChange name="male" />}
              label="CS Part 1"
            />
            <FormControlLabel
              control={<Checkbox onChange name="female" />}
              label="CS Part 2"
            />
            <FormControlLabel
              control={<Checkbox checked onChange name="other" />}
              label="CS Part 3"
            />
          </FormGroup>
          <FormLabel component="legend">Procurement(KISM)</FormLabel>
          <FormGroup>
          <FormControlLabel
            control={<Checkbox  onChange name="male" />}
            label="CPSP Part 1"
          />
          <FormControlLabel
            control={<Checkbox onChange name="female" />}
            label="CPSP Part 2"
          />
          <FormControlLabel
            control={<Checkbox checked onChange name="other" />}
            label="CPSP Part 3"
          />
          <FormControlLabel
            control={<Checkbox checked onChange name="other" />}
            label="CPSP Part 4"
          />
          <FormControlLabel
            control={<Checkbox checked onChange name="other" />}
            label="APS Level 1"
          />
          <FormControlLabel
            control={<Checkbox checked onChange name="other" />}
            label="APS Level 2"
          />
        </FormGroup>
        <FormLabel component="legend">HUMAN RESOURCE</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox  onChange name="male" />}
            label="CHRP Part 1"
          />
          <FormControlLabel
            control={<Checkbox onChange name="female" />}
            label="CHRP Part 2"
          />
          <FormControlLabel
            control={<Checkbox checked onChange name="other" />}
            label="CHRP Part 3"
          />
        </FormGroup>
      </Grid>
      </CardContent>
    </Card>
    )
}