import { Box, InputAdornment, TextField, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'


function UserComponent() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [disableBtn, setDisableBtn] = useState(true)
    const [showData, setShowData] = useState(false)

    

    const handleCreate = () => {
        const postBody = {
            UserName :username,
            Email: email,
            PhoneNumber :phoneNumber,
            Password: password,
            ConfirmPassword :confirmPassword
        }
        console.log(postBody)
        setShowData(true)
        setUsername("")
        setEmail("")
        setPhoneNumber("")
        setPassword("")
        setConfirmPassword("")
    }


    useEffect(()=>{
        if (username && email && phoneNumber && password && confirmPassword){
            setDisableBtn(false)

        } else {
            setDisableBtn(true)
        }
    },[username,email,phoneNumber,password,confirmPassword])

  return (
    <Box 
    component="form"
    
    sx={{mt: 5, px: 5, display:"flex", flexDirection:"column", width: "300px", gap: "10px"}}
    noValidate
    autoComplete="off"
    >
        <Typography variant='h6'>User</Typography>
        <TextField
        error="true"
        className='username'
        variant='outlined' 
        label="Username" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        type="text"
        />
        <TextField 
        className='email'
        variant='outlined' 
        label="Email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)} 
        type="email"
        />
        <TextField 
        className='phonenumber'
        variant='outlined' 
        label="Phone Number" 
        type="number"
        value={phoneNumber}
        onChange={(e)=> setPhoneNumber(e.target.value)}
        InputProps={{
            startAdornment: <InputAdornment>+95</InputAdornment>
        }}   
        />
        <TextField 
        className='password'
        variant='outlined' 
        label="Password" 
        type="password"
        value={password}
        onChange={(e)=> { setPassword(e.target.value)}}
        />
        <TextField 
        className='password'
        variant='outlined' 
        label="Confirm Password" 
        type="password"
        value={confirmPassword}
        onChange={(e)=>{ setConfirmPassword(e.target.value)}}
        />
        <Button variant="contained" onClick={handleCreate} disabled={disableBtn}>Create</Button>
        {showData && 
        <Box>
            <Typography>Succesfully Created!</Typography>
        </Box>
        }

         {/* <Button variant='contained' sx={{margin: 10}} onClick={handleClick}>Click me</Button>
        {disable == true? <Box>
        {myArr.map((item,index)=> (
            <Typography key={index}>
                {item}
            </Typography>
        ))}
        </Box> : null } */}
    </Box>
  )
}

export default UserComponent