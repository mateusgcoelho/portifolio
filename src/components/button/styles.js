import styled from "styled-components";

export const Container = styled.button`
    width: 272px;
    height: 50px;

    padding: 1rem 2rem;

    border-radius: 0.2rem;

    background: ${props => props.theme == "light" ? `var(--white)` : `var(--background)`};
    color: ${props => props.theme == "light" ? `var(--background)` : `var(--general-texts)`};

    border: .001px solid ${props => props.theme == "light" ? `var(--white)` : `var(--general-texts)`};

    font-size: 1rem;
    font-weight: 500;

    transition: .2s all;

    &:hover {
        background: var(--background);
        color: ${props => props.theme == "light" ? `var(--white)` : `var(--white)`};
        border: .001px solid var(--white);
    }
`;
