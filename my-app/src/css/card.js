import { styled } from "styled-components";

export const DIV=styled.div`
 width:100%;
display:grid;
grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
gap:40px;
`
export const CardDetails=styled.div`
 background-color:royalblue;
 color: black;
 width:100%;
 margin:auto;
 padding:20px;
 p{
    font-size:24px;
    padding-left:10px;
    text-align:left;
    margin-top:30px
 }
 h1{
    font-size:24px;
    font-weight:bold;
 }
`
export const PAYMENT=styled.div`
   margin-top:60px;
   padding:10px;
   width:100%;
   margin:auto;
   display:flex;
   justify-content:space-between;
  
`
