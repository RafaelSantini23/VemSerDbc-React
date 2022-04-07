import styled from "styled-components";

export const ItemMenu = styled.li`
    padding-left: 30px;
    list-style-type: none;
    height: 56px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    
    :hover {
        background: rgb(159, 162, 180, 0.8);
        
    }
    :hover:before {
        content: '';
        width: 3px;
        height: 100%;
        position: absolute;
        left: 0px;
        background-color: #DDE2FF;
    }
`

export const ButtonHeader = styled.button`
    width: 240px;
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
    margin: 20px;
    :hover {
        background-color: gray;
    }
    
`
