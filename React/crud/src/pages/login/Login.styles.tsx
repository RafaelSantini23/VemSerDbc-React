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

export const InfoLogin = styled.p`
    font-size: 14px;
    color: #9FA2B4;
    margin-top: 12px;
    text-align: center;
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