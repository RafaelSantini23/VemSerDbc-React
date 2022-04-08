import styled, { css } from 'styled-components'



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

export const ContainerForm = styled.div`
    width: 80%;
    height: 890px;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    margin: 25px auto;
    border-radius: 8px;
    background-color: #FFFFFF;
`

export const inputSelect = styled.select`
    width: 316px;
    height: 42px;
    border-radius: 8px;
    background: #FCFDFE;
    border: 1px solid #F0F1F7;
    outline: none;
`

export const AddressDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 50px;
`


export const ButtonTable = styled.button`
    width: 48px;
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

    ${(props: any) => props.delete && css`
        background-color: red;
    `}

`;
