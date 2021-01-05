import Image from 'next/image'
import styles from './ProfilePicture.module.css'

const ProfilePicture = () => {
  return (
    <Image
      src="/profile-picture.jpg"
      alt="Mario profile picture"
      width={150}
      height={150}
      quality={95}
      className={styles.root}
    />
  )
}

export default ProfilePicture
