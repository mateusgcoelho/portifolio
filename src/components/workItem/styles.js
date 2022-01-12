import styled from "styled-components";

export const Container = styled.a`
    width: 100%;
    min-height: 20rem;

    /* background: red; */

    max-width: 16rem;

    cursor: pointer;
    padding: 1rem;

    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    img {
        width: 220px;
        height: 160px;
        
        object-fit: cover;
        
        border-radius: .2rem;
    }
    
    .about {
        margin-top: 1rem;
        max-width: 20rem;

        h2 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
        }
    }
`;
