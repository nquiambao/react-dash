import styled from 'styled=components'

const Button = styled.button`
    background-color: ${props.bgcolor || "transparent"};
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 3px 1px #ddd;
    padding: 0.25rem;
    margin: 4rem;
    color: ${props => props.color || "#6e6e6e"};
`;

export {Button}