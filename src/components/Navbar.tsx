import React, { useContext } from 'react'
import './Navbar.css';
// import { Link } from 'react-router-dom';
// import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
// import { AuthContext } from '../context/AuthContext';

type Props = {}

const Navbar = (props: Props) => {

    // const {user, dispatchAuth} = useContext(AuthContext);
    // console.log(user)

  return (
        <div className='navbar'>
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <div className="language">
                        ENG
                    </div>
                    <div className="search-container">
                        <input type="text" />
                        {/* <SearchOutlined/> */}
                    </div>
                </div>

                <div className="navbar-center">
                    <h3 className='title'> FOOT.SHOPEE.</h3>
                </div>

                <div className="navbar-right">
                    <div className='user-email'> 
                        {/* {user? user.email : null} */}
                    </div>
                    {/* <Link to={`/`}>
                        <div className='menu-item'>Home</div>
                    </Link>

                    <Link to={`/register`}>
                        <div className='menu-item'>Register</div>
                    </Link>

                    { user?
                        <div className='menu-item' onClick={handleLogout}>
                            Logout
                        </div>
                        :
                        <Link to={`/login`}>
                            <div className='menu-item'>Login</div>
                        </Link>
                    }

                    <Link to={`/cart`}>
                        <Badge badgeContent={cartItems.length} color='primary'>
                            <div className='menu-item'> <ShoppingCartOutlined style={{fontsize:10}}/> </div>
                        </Badge>
                    </Link> */}
                    
                </div>

            </div>
        </div>
  )
}

export default Navbar