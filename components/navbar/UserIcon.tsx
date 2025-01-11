
import { fetchProfileImage } from '@/utils/action';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';

async function UserIcon(){
    const profileImage = await fetchProfileImage();
    if(profileImage){
        return (<Image alt="profile_image" src={profileImage} className='w-6 h-6 rounded-full object-cover'/>)
    }
return<LuUser className='w-6 h-6 bg-primary rounded-full text-white'/>
}

export default UserIcon;

 

