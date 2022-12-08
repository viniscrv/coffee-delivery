import styled from "styled-components";

export const CoffesListContainer = styled.div`
    h2 {
        margin-bottom: 2rem;
        font-size: 2rem;
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["base-subtitle"]};
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

