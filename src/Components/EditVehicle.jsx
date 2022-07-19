import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editUser, getallUsers } from '../services/vehicle';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    model : "",
    year: "",
    make: "",
}

const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, model, year, make} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const navigate = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
       navigate('/vehicle');
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
                <Button variant="contained" onClick={() => editUserDetails() } color="primary" align="center">Update Vehicle</Button>
                <Button onClick={()=> navigate("/vehicle")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Delete</Button>
            </Box>
        </FormGroup>
        </Box>
    </Container>
    )
}


export default EditUser;