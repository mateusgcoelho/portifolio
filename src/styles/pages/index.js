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
    align-items: center;
    justify-content: center;
`;

export const Welcome = styled.section`
    width: 100%;

    padding: 4rem 0;

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
        font-size: 3rem;
    }
`;

export const WelcomeControllers = styled.section`
    margin-top: 3.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    button + button {
        margin-top: 1.8rem;
    }
`;
