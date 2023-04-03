import React from 'react'
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const HeaderTop = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <div className='header__top'>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Til</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"uz"}>uz</MenuItem>
          <MenuItem value={"ru"}>ru</MenuItem>
        </Select>
      </FormControl>

    </div>
  )
}

export default HeaderTop