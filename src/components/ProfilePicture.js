import Image from 'next/image'

import imgSrc from '../../public/profile-picture.jpg'
import styles from './ProfilePicture.module.css'

const ProfilePicture = (props) => {
  return (
    <Image
      width={150}
      height={150}
      quality={95}
      {...props}
      src={imgSrc}
      alt="Mario profile picture"
      className={styles.root}
      placeholder="blur"
    />
  )
}

export default ProfilePicture
