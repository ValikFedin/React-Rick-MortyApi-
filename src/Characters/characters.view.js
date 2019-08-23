import styled from "styled-components";

export default {
    MainContainer: styled.div`
    padding:0;
    margin:0;
    width:100%;
    height:500px;
    text-align:center;
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
    width:75px;
    height:30px;
    background-color:#0099CC;
    `,
    Prev: styled.button`
    width:75px;
    height:30px;
    background-color:#0099CC;
    `,
    PrevDis: styled.button`
    width:75px;
    height:30px;
    background-color:grey;
    outline:none;
    transform:none;
    opacity:0.7;
    `,
    NextDis: styled.button`
    width:75px;
    height:30px;
    background-color:grey;
    opacity:0.7;
    outline:none;
    transform:none;
    `,
    Loading: styled.img`
    width:250px;
    height:250px;
    `,
    LoaderWrapper: styled.div`
    width:100%;
    height:600px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    `
}