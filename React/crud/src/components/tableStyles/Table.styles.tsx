import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`


export const TableStyle =  styled.table`
    text-align: center;
    background: #FFFFFF;
    border-spacing: 0;
    margin: 0 auto;
    box-sizing: border-box;
    width: 1250px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    th {
        padding: 20px 0px;
        border-bottom: 1px solid #DFE0EB;
    }

    td {
        width: 10%;
        
        border-bottom: 1px solid #DFE0EB;
        padding: 10px;
    }
`

export const ButtonTable = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: ${props => props.color};
    border: 0;
    color: white;
    margin-top: 24px;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    transition: .5s;
    :hover {
        background-color: gray;
    }

`;
