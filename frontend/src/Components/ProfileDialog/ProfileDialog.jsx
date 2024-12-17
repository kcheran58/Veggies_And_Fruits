import React from 'react';
import './ProfileDialog.css';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/slice/isLogged';
const ProfileDialog = ({ onClose }) => {
    const user = useSelector((state)=>state.currentUser);
    const dispatch = useDispatch();
    const handleLog = async()=>{
        dispatch(logOut());
        await onClose;
    }
  return (
    <div className='dim-overlay'>
      <div className='dialog-overlay'>
        <div className='dialog-box'>
          <h2>Profile</h2>
          <Avatar src= "/broken-image.jpg" sx={{ width: '70px', height: '70px', marginBottom: '15px', marginLeft:'120px'}} />
          <table className="profile-table">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="dialog-buttons">
            <Button variant="contained" color="primary" onClick={onClose}>Close</Button>
            <Button variant="outlined" color="secondary" onClick={handleLog}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDialog
