import './Register.css'
import { useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import useAuth from '../../customHooks/useAuth';

const Login = () => {
   
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {authenticate, error, isLoading} = useAuth();
    // const {loadUserCart} = useChangeCart();
    const navigate = useNavigate();

    
    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>)  => { 
      e.preventDefault();

      try {
        const response = await authenticate({username:'giang-nguyen4', email: 'akatsuki@gmail.com', password: '12345'}, 'login');
      
      } catch (e){
        console.log(e)
      }
 
    }
    

  return (
     <div className="login-register-container">
      <form onSubmit={ handleSubmit}>
        <div className='section-title'>Login</div>

        <div className='input-container'>

          <label>Username:</label>
          <input 
            type="userName" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
          />
          
          <label>Email :</label>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <label>Password:</label>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </div>

        <button >Login</button>
        {/* {error && <div className="error">{error}</div>} */}

      </form>

     </div>
  )
}

export default Login