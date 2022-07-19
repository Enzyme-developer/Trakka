import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../services/vehicle';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: "",
    model : "",
    year: "",
    make: "",
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, model, year, make} = user;

    let navigate = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () => {
        if (name || model || year || make) {
        
            await addUser(user);
            navigate('/user');
            alert("Vehicle has been added")
        } else {
            alert("fill in the required fields")
        }
        }


    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center"> Add User Details </Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Model</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="model" value={model} />
                </FormControl>
                <FormControl>
                    <InputLabel>Year</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="year" value={year} />
                </FormControl>
                <FormControl>
                    <InputLabel>Make</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="make" value={make} />
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addUserDetails() } color="primary" align="center">Add Vehicle</Button>
                    <Button onClick={()=> navigate("/vehicle")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Delete</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddUser;