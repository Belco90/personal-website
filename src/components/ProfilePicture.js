import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProfilePicture = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Mario profile picture"
      imgStyle={{
        borderRadius: '100%',
      }}
    />
  );
};

export default ProfilePicture;
