import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate} from 'react-router-dom';
import { Button, Grid,Paper,TextField } from '@mui/material';

const Login = () => {

    const paperstyle={padding :50 ,height:'40vh',width:280,margin:"100px 100px 100px 550px",borderradius:10}

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const navigate=useNavigate();
 
    


    const onLogin = () => {
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                navigate('/dashboard')
            })
            .catch(e => alert(e.message))
            .finally(() => setLoading(false))
    }

    return (
        <Grid>
       <Paper elevation={12} style={paperstyle}>
            <Grid align='center'>
            <h2>Log In</h2>
            
                <TextField id="outlined-basic" label="Email" variant="outlined"  required fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        
                    />
                
                <p></p>

                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password' required fullWidth
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        
                        
                    />
               
                <p></p>
                    <Button type='Login' color='primary' variant="contained"  onClick={onLogin} fullWidth>  {loading ? 'Logging you in ...' : 'Login'}</Button>
                
                    <p></p>
                    <Link to="/signup">
                        Don't have an account?
                    </Link>
             
            </Grid>
        </Paper>
            </Grid>
    )
}

export default Login;