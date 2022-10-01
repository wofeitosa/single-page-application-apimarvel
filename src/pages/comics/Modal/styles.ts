import styled from "styled-components";

export const ModalContainer = styled.div`
    background-color: #c2c2c2;
    max-width: 500px;
    width: 90%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;

    span {
        padding: 10px;
        display: block;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
    }

    div {
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;
    }
`;

export const Img = styled.img`
   width: 180px;
   display: block;
   margin-bottom: 10px;
`;