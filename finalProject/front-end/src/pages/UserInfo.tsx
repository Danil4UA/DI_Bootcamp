import Logout from "./Logout";
import { useEffect, useRef } from "react";

interface UserInfoProps {
    onClose: ()=> void
}



const UserInfo = ({ onClose }: UserInfoProps): JSX.Element => {
    
    const userInfoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userInfoRef.current && !userInfoRef.current.contains(event.target as Node)) {
                onClose(); // Закрываем окно, если кликнули вне его
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Удаляем слушатель при размонтировании
        };
    }, [onClose]);


    return (
        <div className="user-info" ref={userInfoRef}>
            <div className="user-info-top">
                <div className="profile-picture"></div>

                <div className="profile-user-data">
                    <p>Daniil Kapkov</p>
                    <p>danil.kapkov20@gmail.com</p>

                </div>
            </div>
            



            <div className="user-info-bottom">
                <div>Account setting</div>
                <Logout />
            </div>

        </div>
    );
};

export default UserInfo
