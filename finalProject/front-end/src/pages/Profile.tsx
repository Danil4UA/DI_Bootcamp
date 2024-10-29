import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';
import UserInfo from './UserInfo';


interface ProfileProps {
    collapsed : boolean
}
const Profile = ({collapsed}: ProfileProps) => {
    const [showUserInfo, setShowUserInfo] = useState(false);

    const toggleUserInfo = () => {
        setShowUserInfo(!showUserInfo);
    };

    return (
        <>
        <div className="profile">
            <div className="profile-picture"></div>

            {
                !collapsed? 
                <div className="profile-name">
                    Daniil
                    <br>
                    </br> 
                    Kapkov
                </div> 
                :
            ""
            }
            

            { 
            !collapsed? 
            <MoreVert className="settings-icon" onClick={toggleUserInfo} />
            :
            ""
            }

        </div>
        {showUserInfo && <UserInfo onClose={toggleUserInfo} />}
        </>
    )
}

export default Profile