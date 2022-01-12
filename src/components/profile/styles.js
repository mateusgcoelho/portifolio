import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;

    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .about {
        text-align: right;

        margin-left: 1rem;

        h2 {
            font-size: 1.8rem;
            font-weight: bolder;
        }

        p {
            font-size: 1.2rem;
        }

        @media (max-width: 651px) {
            h2 {
                font-size: 1.6rem;
            }

            p {
                font-size: 1rem;
            }
        }

        @media (max-width: 550px) {
            h2 {
                font-size: 1.3rem;
            }

            p {
                font-size: .8rem;
            }
        }
    }

    .profile {
        img {
            width: 8rem;
            border-radius: 50%;

            border: 4px solid #202023;
        }

        @media (max-width: 651px) {
            img {
                width: 6rem;
            }
        }
    }
`;
