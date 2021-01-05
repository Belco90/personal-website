import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <Image
      src="/profile-picture.jpg"
      alt="Mario profile picture"
      width={150}
      height={150}
      quality={95}
    />
  );
};

export default ProfilePicture;
