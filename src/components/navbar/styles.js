import styled from "styled-components";

export const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 5rem;

    backdrop-filter: saturate(180%) blur(5px);
    -webkit-backdrop-filter: saturate(180%) blur(5px);

    box-shadow: var(--header-border-bottom);

    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1400px;

    margin: 0 auto;

    padding: 0 1rem;
`;
