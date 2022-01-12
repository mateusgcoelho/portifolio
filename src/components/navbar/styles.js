import styled from "styled-components";

export const Wrapper = styled.nav`
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    
    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;

    z-index: 2;
`;

export const Navigation = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: .4rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-info {
        display: flex;
        align-items: center;

        > .ignite {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 651px) {
        padding: .4rem 1rem;

        .user-info {
            > .ignite {
                font-size: 1.2rem;
            }
        }
    }

    @media (max-width: 560px) {
        > .ignite {
            font-size: 1.8rem;
            text-align: center;
        }
    }

    @media (max-width: 500px) {
        > .ignite {
            font-size: 1.6rem;
            text-align: center;
        }
    }
`;

export const Routes = styled.div`
    margin-left: 2rem;

    @media (max-width: 530px) {
        display: none;
    }
`;

export const LinkRoute = styled.a`
    cursor: pointer;

    color: #414143;

    font-size: 1rem;

    & + a {
        margin-left: 2rem;
    }

    &:hover {
        border-bottom: 1px solid #414143;
    }
`;

export const GithubLogo = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: .6rem;
    background: #3ab7c7;
    border-radius: 0.4rem;

    img {
        width: 1.6rem;
        height: 1.6rem;
    }
`;
