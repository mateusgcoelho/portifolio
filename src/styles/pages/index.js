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
    height: 20rem;
    width: 100%;

    padding-top: 6rem;

    display: flex;
    justify-content: center;

    h1 {
        font-size: 3.8rem;
        line-height: 3.8rem;

        text-align: center;
    }
`;
