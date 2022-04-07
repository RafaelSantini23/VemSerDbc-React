import styled from "styled-components";

export const ContainerLogin = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    margin: 139px auto;
    height: 582px;
    width: 380px; 
`;

export const TitleLogin = styled.h1`
    font-size: 19px;
    color: #A4A6B3;
    text-align: center;
`;

export const inputStyle = styled.input`
    width: 316px;
    height: 42px;
    border-radius: 8px;
    background: #FCFDFE;
    border: 1px solid #F0F1F7;
    outline: none;
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    position: relative;
`;

export const ButtonForm = styled.button`
    width: 316px;
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

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    img {
        padding-top: 40px;
    } 
`
export const SubTitle = styled.h1`
    font-size: 24px;
    color: #252733;
    margin-top: 32px;
    text-align: center;
`

export const InfoForm = styled.p`
    font-size: 14px;
    color: #9FA2B4;
    margin-top: 12px;
    text-align: center;
`

export const ContainerForm = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: #363740;
      display: flex;
      flex-direction: column;
`

export const LabelStyle = styled.label`
    color: #9FA2B4;
    text-transform: uppercase;
`

export const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    input::placeholder {
        opacity: 40%;
        margin:  33px 16px;
        font-size: 14px;
        line-height: 20px;
    }
`
export const ChangePass = styled.a`
    list-style-type: none;
    position: absolute;
    top: 34px;
    left: 290px;
    cursor: pointer;
    

`

export const SignUp = styled.p`
    text-align: center;
    font-size: 14px;
    color: #9FA2B4;
    margin-top: 32px;
    a {
        text-decoration: none;
        color: #3751FF;
        font-size: 14px;
    }

`