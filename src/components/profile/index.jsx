import { Container } from "./styles";

const Profile = () => {
  return (
    <Container>
      <div className="profile">
        <img
          src="https://pbs.twimg.com/profile_images/1478182222205173762/7Pu03-kt_400x400.jpg"
          alt="User Profile Image"
        />
      </div>

      <div className="about">
        <h2>João Mateus G. Coelho</h2>
        <p>Desenvolvedor FullStack</p>

        <span>17 Anos</span>
      </div>
    </Container>
  );
};

export default Profile;
