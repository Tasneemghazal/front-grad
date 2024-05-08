import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import Chart1 from './Chart1'
import Calender from '../../shared/BasicDateCalender.jsx'
import BasicLineChart from './BasicLineChart'
import './home.css'

export default function Home() {
  return (
    <Box sx={{ ml: { md: "250px" } , mt:1}} >
      <Grid container>
        <Grid component={Paper} item xs={12} sm={12} md={7}sx={{display:"flex", justifyContent:"center", alignItems:"center",mx:1,mt:1}}>
          <Chart1 />
        </Grid>
        <Grid component={Paper} item xs={12} sm={12} md={4} sx={{display:"flex", justifyContent:"center", alignItems:"center", mx:1,mt:1}}>
        <Calender style={{width:"100%",height:"100%"}}/>
        </Grid>
        <Grid item component={Paper} xs={12} sm={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center", mx:1,mt:1,mb:{xs:2,lg:0} ,height:"310px"}}>
       <BasicLineChart/>
      </Grid>
      <Grid item component={Paper} xs={12} sm={12} md={5} sx={{display:"flex", justifyContent:"center", alignItems:"center", mx:1,mt:{xs:0,lg:1},mb:{xs:2,lg:0}, height:"310px",overflow:"hidden",pb:"30px"}}>
        <Chart2/>
      </Grid>
      </Grid>

    
    </Box>
  )
}
