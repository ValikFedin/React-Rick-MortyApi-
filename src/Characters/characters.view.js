import styled from "styled-components";


export default {
    MainContainer: styled.div`
    padding:0;
    margin:0;
    `,
    Wrapper: styled.div`
    width: 200px;
    height: 150px;
    display:inline-block;
    text-align:center;
    vertical-align:center;`,
    Name: styled.div`
    font-weight: 900;
    margin-top:5px;
    font-size:12px;
    `,
    Image: styled.img`
    height:100px;
    width:100px;
    margin-top:10%;
    border:none;
    `,
    Next: styled.button`
    width:50px;
    height:20px;
    `,
    Prev: styled.button`
    width:50px;
    height:20px;
    `,
    PrevDis: styled.button`
    width:50px;
    height:20px;
    background-color:grey;
    outline:none;
    transform:none;
    opacity:0.7;
    `,
    NextDis: styled.button`
    width:50px;
    height:20px;
    background-color:grey;
    opacity:0.7;
    outline:none;
    transform:none;
    `
}