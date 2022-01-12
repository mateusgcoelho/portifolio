import styled from "styled-components";

export const Container = styled.a`
    width: 100%;

    /* background: red; */

    max-width: 16rem;

    cursor: pointer;
    padding: 1rem;

    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    text-align: center;

    img {
        width: 14rem;
        height: 10rem;
        margin-bottom: 1rem;

        object-fit: cover;

        border-radius: .2rem;
    }

    .about {
        max-width: 20rem;

        h2 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
        }
    }
`;
