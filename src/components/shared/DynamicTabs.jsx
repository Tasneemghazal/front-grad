import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function DynamicTabs({ items }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider', pb: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: 'transparent' } 
          }}
        >
          {items.map((item, index) => (
            <Tab
              key={index}
              label={item.label}
              {...a11yProps(index)}
              sx={{
                borderRadius: '4px',
                margin: {xs:"1px",sm:2,md:"6px"},
                backgroundColor: value === index ? '#135D66' : '#77B0AA',
                color: value === index ? 'white !important' : 'black', 
              }}
            />
          ))}
        </Tabs>
      </Box>
      {items.map((item, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {item.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

DynamicTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}