import { Box, InputAdornment, TextField, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

function UserComponent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);
    const [showData, setShowData] = useState(false);

    const [usernameTouched, setUsernameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    const isUsernameValid = !!username;
    const isEmailValid = email.includes('@') && email.endsWith('.com');
    const isPhoneNumberValid = phoneNumber.startsWith('09') && phoneNumber.length === 11;
    const isPasswordValid = !!password;
    const isConfirmPasswordValid = password === confirmPassword;

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setUsernameTouched(true);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailTouched(true);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        setPhoneNumberTouched(true);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordTouched(true);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordTouched(true);
    };

    const handleCreate = () => {
        const postBody = {
            UserName: username,
            Email: email,
            PhoneNumber: phoneNumber,
            Password: password,
            ConfirmPassword: confirmPassword
        };
        console.log(postBody);
        setShowData(true);
        setUsername('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');
        setUsernameTouched(false);
        setEmailTouched(false);
        setPhoneNumberTouched(false);
        setPasswordTouched(false);
        setConfirmPasswordTouched(false);
    };

    useEffect(() => {
      setDisableBtn(!(isUsernameValid && isEmailValid && isPhoneNumberValid && isPasswordValid && isConfirmPasswordValid));
         }, [isUsernameValid, isEmailValid, isPhoneNumberValid, isPasswordValid, isConfirmPasswordValid]);

    return (
        <Box
            component="form"
            sx={{ mt: 5, px: 5, display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h6">User</Typography>
            <TextField
                error={usernameTouched && !isUsernameValid}
                className="username"
                variant="outlined"
                label="Username"
                value={username}
                onChange={handleUsernameChange}
                type="text"
                helperText={usernameTouched && username.length === 0 ? 'Username is required' : '' }
            />
            <TextField
                error={emailTouched && !isEmailValid}
                className="email"
                variant="outlined"
                label="Email"
                value={email}
                onChange={handleEmailChange}
                type="email"
                helperText={emailTouched && !isEmailValid ? 'Invalid email format' : ''}
            />
            <TextField
                error={phoneNumberTouched && !isPhoneNumberValid}
                className="phonenumber"
                variant="outlined"
                label="Phone Number"
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                InputProps={{
                    startAdornment: <InputAdornment>+95</InputAdornment>
                }}
                helperText={phoneNumberTouched && !isPhoneNumberValid ? 'Invalid phone number format' : ''}
            />
            <TextField
                error={passwordTouched && !isPasswordValid}
                className="password"
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                helperText={passwordTouched && password.length === 0 ? 'Password is required' : ''}
            />
            <TextField
                error={(passwordTouched || confirmPasswordTouched) && !isConfirmPasswordValid}
                className="password"
                variant="outlined"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                helperText={(confirmPasswordTouched && !isConfirmPasswordValid) ? 'Passwords do not match' : ''}
            />
            <Button variant="contained" onClick={handleCreate} disabled={disableBtn}>
                Create
            </Button>
            { !disableBtn &&
              <Typography>Ready To Create</Typography>}
        </Box>
    );
}

export default UserComponent;
