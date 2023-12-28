import { styled } from "styled-components";

export const Currency=styled.div`
padding:30px;
width:80%;
margin:auto;
text-align:center;

margin-top:30px;


h1{
    text-align:center;
    font-size:30px;
    margin-bottom:30px;
};
button{
   
    border-radius:15px;
    padding:5px;
    padding-left:20px;
    padding-right:20px;
    margin-top:30px;
    background-color:aqua;
    
}
button:hover {
    border:2px solid black;
    background-color:white;
}
`
export const Head=styled.div`

    width:30%;
    margin:auto;
    span{
        font-size:20px
    };
    input{
        width:70%;
        border:1px solid black;
        border-radius:10px;
        padding:2px;
        text-align:center;
    }

`
export const Curr=styled.div`
display:flex;
width:80%;
margin:auto;
margin-top:50px;
justify-content:space-around;


div{
   width:50%;
   margin-left:30px;
    select{
        width:60%;
        border-radius:20px;
        border:1px solid black;
        text-align:center;
        padding:5px;
    }
}

`