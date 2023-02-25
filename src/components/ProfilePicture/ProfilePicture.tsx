import profilePicture from '../../assets/images/daniel.jpeg';
import { Image } from './ProfilePicture.style';

export const ProfilePicture: React.FC = () => {
    return <Image src={profilePicture} alt="Profile Picture" />;
}

export default ProfilePicture;
