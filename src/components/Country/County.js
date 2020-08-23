import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Country = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderSelectOption = () => {
    const countryList =
      data.length !== 0
        ? data.map((country, index) => {
            return <option value={index.toString()}>{country.name}</option>;
          })
        : null;
    return countryList;
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">Countries</InputLabel>
      <Select
        native
        inputProps={{
          name: "Countries",
          id: "age-native-simple",
        }}
      >
        <option aria-label="None" value="" />
        {renderSelectOption()}
      </Select>
    </FormControl>
  );
};

export default Country;
