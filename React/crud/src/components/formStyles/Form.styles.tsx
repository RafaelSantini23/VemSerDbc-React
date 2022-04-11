import styled from 'styled-components';
import  InputMask  from 'react-input-mask';


export const ButtonForm = styled.button<{width: string}>`
    width: ${props => props.width};
    height: 48px;
    border-radius: 8px;
    background: #3751FF;
    border: 0;
    color: white;
    margin-top: 24px;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 8px;
    cursor: pointer;
    transition: .5s;

    :hover {
        background-color: gray;
    }
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    position: relative;
`;

export const InputStyle = styled.input`
    width: ${props => props.width};
    height: 42px;
    border-radius: 8px;
    background: #FCFDFE;
    border: 1px solid #F0F1F7;
    outline: none;
`;

export const InputMasked = styled(InputMask)`
    width: ${props => props.width};
    height: 42px;
    border-radius: 8px;
    background: #FCFDFE;
    border: 1px solid #F0F1F7;
    outline: none;
`;



export const InputSelect = styled.select`
    width: 850px;
    height: 42px;
    border-radius: 8px;
    background: #FCFDFE;
    border: 1px solid #F0F1F7;
    outline: none;
`


export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    

    label {
        margin-top: 10px;
        display: block;
    }
    button {
        display: block;
    }   

`
export const ContainerForm = styled.div<{width: string, height: string, bs?: string, flex?: string, column?: string}>`
    width: ${props => props.width} ; 
    height: ${props => props.height}; 
    box-shadow: ${props => props.bs};
    margin: 0 auto;
    border-radius: 8px;
    background-color: ${props => props.color}; 
    display: ${props => props.flex}; 
    flex-direction: ${props => props.column}; 
`

export const LabelStyle = styled.label`
    color: #9FA2B4;
    text-transform: uppercase;
`