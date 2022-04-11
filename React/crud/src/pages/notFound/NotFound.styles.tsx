import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 969px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const NotFoundImg = styled.img`
    src: url(${props => props.src});
    width: ${props => props.width};
    height: ${props => props.height};
    

`
