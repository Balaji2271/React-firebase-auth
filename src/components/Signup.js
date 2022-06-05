import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link ,useNavigate} from 'react-router-dom';
import { Grid,Paper, TextField ,Button} from '@mui/material';

const Signup = () => {

    const paperstyle={padding :50 ,height:'50vh',width:280,margin:"100px 100px 100px 550px",borderradius:10}

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const navigate=useNavigate();

    


    const onSignup = () => {
        setLoading(true);
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => navigate('/'))
                    .catch((e) => alert(e.message))
            }).catch((e) => alert(e.message))
            .finally(() => setLoading(false))
    }

    return (
        <Grid>
            <Paper elevation={12} style={paperstyle}>
            <Grid align='center'>
            <h1>Sign Up</h1>
        
            <Grid item spacing={9}>
                    <TextField id="outlined-basic" label="Name" variant="outlined"  required fullWidth
                        value={name}
                        onChange={e => setName(e.target.value)}
                        name="name"
                        type="name"
                        
                    />
                    <p></p>
                    </Grid>
            
            <Grid item spacing={9}>
                    <TextField id="outlined-basic" label="Email" variant="outlined"  required fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        
                    />
                </Grid>
                <p></p>
                <Grid item spacing={9}>
                   
                    <TextField id="outlined-basic" type='password' label="Password" variant="outlined"  required fullWidth
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        
                        
                    />
                    </Grid>
                    <p></p>
               
                    <Button type='Signup' color='primary' variant="contained"  onClick={onSignup} fullWidth> { loading ? 'Creating user ...' : 'Signup'}</Button>
                    <p></p>
                    <Link to="/">
                        Already have an account?
                    </Link>
                
        </Grid>
        </Paper>
        </Grid>
    )
}

export default Signup;