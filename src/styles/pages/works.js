import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.section`
    width: 100%;
    max-width: 640px;

    margin: 6rem auto;
    margin-bottom: 0rem;

    padding: 1rem 2rem;

    > h1 {
        width: 2rem;
        border-bottom: 4px solid var(--white);
        line-height: 1.4;
    }
`;

export const WorksWrapper = styled.div`
    width: 100%;

    /* padding: 0 .5rem; */

    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 1rem;
`;
