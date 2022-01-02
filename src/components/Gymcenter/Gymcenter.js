import React, { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
    
    const Gymcenter = () => {
        const [gymcenters,setGymcenters] = useState([])
        useEffect(()=>{
            fetch('./data.json')
            .then(res => res.json())
            .then(data => setGymcenters(data))
        },[])
        return (
            <Grid container spacing={2}>
                {
                    gymcenters.map(center => 
                            
                                <Grid item xs={4}>
                                    <Card>
                                    
                                    <Typography variant="h4" component="div">
                                        {center.name}
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        Phone : {center.phone}
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        Email : {center.email}
                                    </Typography>
                                    <Typography variant="subtitle2" component="div">
                                        Instructor : {center.instructors}
                                    </Typography>
                                    </Card>
                                </Grid>
                            
                            
                       
                        )
                }
            </Grid>
        );
    };
    
    export default Gymcenter; 