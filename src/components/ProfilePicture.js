import Image from 'next/image'
import styles from './ProfilePicture.module.css'

const ProfilePicture = (props) => {
  return (
    <Image
      width={150}
      height={150}
      quality={95}
      {...props}
      src="/profile-picture.jpg"
      alt="Mario profile picture"
      className={styles.root}
    />
  )
}

export default ProfilePicture
