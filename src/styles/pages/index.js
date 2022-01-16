import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;

    padding-top: 5rem;
`;

export const Content = styled.section`
    padding: 0.4rem;

    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Welcome = styled.section`
    width: 100%;

    padding: 6rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const WelcomeTexts = styled.section`
    text-align: center;

    h1 {
        font-size: 3.5rem;
        font-weight: 900;
        line-height: 3.7rem;
    }

    span {
        font-weight: 900;
        font-size: 3.2rem;

        background: -webkit-linear-gradient(#D8CACB, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const WelcomeControllers = styled.section`
    margin-top: 3.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    button + button {
        margin-top: 1.7rem;
    }
`;

export const AboutMe = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        text-align: center;

        line-height: 30px;
        font-size: 20px;
        font-weight: 300;

        color: var(--general-texts);
    }
`;

export const TechnologiesWrapper = styled.section`
    margin-top: 6rem;

    text-align: center;
`;

export const TechnologiesList = styled.div`
    width: 100%;
`;

export const UserProfile = styled.div`
    background: gray;

    height: 8rem;
    width: 8rem;
    
    border-radius: 50%;

    margin-bottom: 2rem;
`;

