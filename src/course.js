import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const selections = [ 1,2,3];

const selections = [
  'ACCOUNTANCY',
  'FINANCE',
  'GOVERNANCE AND MANAGEMENT',
  'PROCUREMENT(KISM)',
  'HUMAN RESOURCE'
];

const accountancy = [
  'CPA SECTION 1',
  'CPA SECTION 2',
  'CPA SECTION 3',
  'ATD LEVEL 1',
  'ATD LEVEL 2',
  'ATD LEVEL 3',
  'CAMS LEVEL 1',
  'CAMS LEVEL 2'
];

const finance = [
  'CIFA PART 1',
  'CIFA PART 2',
  'CIFA PART 3'
];

const gnm = [
  'CS PART 1',
  'CS PART 2',
  'CS PART 3'
];

const kism = [
  'CPSP PART 1',
  'CPSP PART 2',
  'CPSP PART 3',
  'CPSP PART 4',
  'APS LEVEL 1',
  'APS LEVEL 2'
];

const hr = [
  'CHRP PART 1',
  'CHRP PART 2',
  'CHRP PART 3'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Course() {
  const classes = useStyles();
  const theme = useTheme();
  const [selection, setSelection] = useState('');
  const [second, setSecond] = useState('');

  const varying = [selection , second]


  const handleChange = (event) => {
    setSelection(event.target.value);
    console.log(event.target.value);
    // secondSelected(event.target.value);
  };

  const handleSecondChange = (event) => {
    setSecond(event.target.value);
    console.log(event.target.value);
    // secondSelected(event.target.value);
  };

  
//   (selection) => {
//     switch (selection) {
//       case 'ACCOUNTANCY':
//       return accountancy.map((option) => (<MenuItem value={option}> {option} </MenuItem>))
//       //  console.log('i am here')
//       case 'FINANCE':
//       return (finance.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
//       case 'GOVERNANCE AND MANAGEMENT':
//       return (gnm.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
//       case 'PROCUREMENT(KISM)':
//       return (kism.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
//       case 'HUMAN RESOURCE':
//       return (hr.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
//       default:
//         return 'Unknown selection';
//   }
// }

  function secondSelected(selection) {
    if (selection === "ACCOUNTANCY") {
     return accountancy.map((option) => (<MenuItem value={option}> {option} </MenuItem>))
    }
    else 
     console.log("hereeee")
  }


  // const handleChangeMultiple = (event) => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   setSelection(value);
  // }

  return (

    <Card display="flex">
      <CardContent>

        <FormControl className={classes.formControl}>
        <InputLabel> Course </InputLabel>
        <Select
          labelId="name-label"
          id="mutiple-name"
          value={selection}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {selections.map((selection) => (
            <MenuItem key={selection} value={selection}>
              {selection}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Choose your course</FormHelperText>
        <FormHelperText>{selection}</FormHelperText>
      </FormControl>


      <FormControl className={classes.formControl}>
        <InputLabel > Branch </InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          value={second}
          onChange={handleSecondChange}
          input={<Input />}
          onClose={() => console.log(varying)}
          MenuProps={MenuProps}
        >
          {accountancy.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}

          {
              (selection) => {
      switch (selection) {
      case 'ACCOUNTANCY':
      return accountancy.map((option) => (<MenuItem value={option}> {option} </MenuItem>))
       console.log('i am here')
      case 'FINANCE':
      return (finance.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
      case 'GOVERNANCE AND MANAGEMENT':
      return (gnm.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
      case 'PROCUREMENT(KISM)':
      return (kism.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
      case 'HUMAN RESOURCE':
      return (hr.map((option) => (<MenuItem value={option}> {option} </MenuItem>)))
      default:
        return 'Unknown selection';
  }
}
          }
        </Select>
        <FormHelperText>Choose your course section</FormHelperText>
        <FormHelperText>{second}</FormHelperText>
      </FormControl>

      </CardContent>
    </Card>
    )
}


// function secondSelected(firstselection) {
//   switch (firstselection) {
//     case 0:
//       return firstselection.map((selection) => (<MenuItem value={selection}><ListItemText primary={selection}/> </MenuItem>)
//     case 1:
//       return finance
//     case 2:
//       return gnm
//     case 3:
//       return kism
//     case 4:
//       return hr
//     default:
//       return 'Unknown selection';
//   }
// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return ( <Personal />)
//     case 1:
//       return (<Course />)
//     case 2:
//       return (<Declaration />)
//     default:
//       return 'Unknown stepIndex';
//   }
// }