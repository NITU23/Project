import React, {useState} from 'react'
import Login from './Login'
import Signup from './Signup'
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{margin:'auto'}}
        value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Signup" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Login />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Signup />
      </CustomTabPanel>
    </Box>
  );
}
export default Main