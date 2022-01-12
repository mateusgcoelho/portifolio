import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.section`
    width: 100%;
    max-width: 700px;

    margin: 6rem auto;
    margin-bottom: 0rem;

    padding: 1rem 2rem;
`;

export const AboutWrapper = styled.div`
    position: relative;
    width: 100%;

    min-height: 17rem;
`;

export const AboutContent = styled.div`
    > h1 {
        font-size: 2.4rem;
    }

    @media (max-width: 651px) {
        > h1 {
            font-size: 2rem;
            text-align: center;
        }
    }

    @media (max-width: 560px) {
        > h1 {
            font-size: 1.8rem;
            text-align: center;
        }
    }

    @media (max-width: 500px) {
        > h1 {
            font-size: 1.6rem;
            text-align: center;
        }
    }
`;

export const Background = styled.div`
    position: absolute;
    width: 90%;
    z-index: -1;

    left: 50%;

    video {
        width: 100%;
    }

    img {
        width: 100%;

        position: absolute;
        top: 0;
        right: 0;
        left: 0;

        mix-blend-mode: screen;
    }
`;

export const UserInfo = styled.div``;

export const Technologies = styled.div`
    padding: 2rem 0;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;

    /* overflow-x: hidden; */

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 4rem;

    h2 {
        border-bottom: 4px solid #202023;
        line-height: 1.4;
    }

    @media (max-width: 651px) {
        h2 {
            text-align: center;
            font-size: 1.2rem;
        border-bottom: none;
        }
    }
`;

export const ContentUserInfo = styled.div`
    margin-top: 1.4rem;

    & + & {
        margin-top: 4rem;
    }

    ul {
        list-style: none;

        margin-top: .7rem;

        li {
            & + li {
                margin-top: .4rem;
            }

            b {
                margin-right: .4rem;
            }
        }
    }

    h2 {
        width: 24px;

        border-bottom: 4px solid #202023;
        margin-bottom: 1rem;
    }

    p {
        text-align: justify;
    }
`;
