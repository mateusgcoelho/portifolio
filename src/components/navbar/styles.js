import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 5rem;

    backdrop-filter: saturate(180%) blur(2px);
    -webkit-backdrop-filter: saturate(180%) blur(2px);

    box-shadow: var(--header-border-bottom);

    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1400px;

    margin: 0 auto;

    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        font-size: 1.5rem;
        font-weight: 700;

        color: var(--white);
    }

    .menu {
        height: 2rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .rect {
            width: 1.8rem;
            height: 1px;
            background: var(--white);
            transform: rotate(45deg);

            transition: .2s all;
        }
    }
`;
