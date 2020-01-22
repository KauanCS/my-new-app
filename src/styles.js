import styled from 'styled-components';

const Container = styled.div`
    text-align: center
    background-color: #0b0028;
`;

const Square = styled.div`
    display: inline;
    font-size: 36px;
    border: solid 5px;
    vertical-align: middle;
    color: ${props => (props.color ? props.color : "white" )};
    text-align: center;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${props => (props.transform ? props.transform : "translate(-50%,-50%)" )};
    width : 200px;
    height: 200px;
    `;

const Divisor = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 50px
    `;
    
    
const DivBar = styled.div`
    background: ${props => (props.background && (props.background > 100) ? "radial-gradient(circle, rgba(11,0,40,1) 20%, rgba(11,0,40,0) 100%)" : "radial-gradient(circle, rgba(11,0,40,0) 50%, rgba(11,0,40,0) 100%)" )};
    margin: 0px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    // visibility: visible;
    // opacity: ${props => (props.background && (props.background > 100) ? 1 : 0)};
    transition: ${props => (props.background && (props.background > 100) ? "  " : "0.5s linear" )};
    // box-shadow: ${props => (props.background && (props.background > 100) ? "0 12px 16px 0 rgba(0,0,0,0.44), 0 17px 50px 0 rgba(0,0,0,0.19)" : "")};
    
    
    `;
    
const ButtonBar = styled.button`
    background: rgba(0,0,0,0);
    min-width: 25vh;
    border: none;
    color: white;
    padding: 20px 32px;
    font-size: 18px;
    transition: .5s
    :hover{
        background: #fb2745;
        color: white;
        transition: .5s
    }
    :active{
        background: #fb2745;
    }
    
    `;

const ButtonIntro = styled.button`
    transition: .4s;
    color: white;
    font-family: "Franklin Gothic Medium";
    border: solid 0px black;
    background: #fb2745;
    font-size: 22px;
    padding: 10px 30px 10px 30px;
    margin-left: 350px;
    margin-bottom: 20px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.84),
                    0 17px 10px 0 rgba(0,0,0,0.09);

    :active{
        transition: .1s;
        margin-bottom: 40px;
        background: red;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    align-content: space-between;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 20px;
`;

const InnerContent = styled.div`
    background: rgba(255, 255, 255, 0.05);
    // border: solid 1px rgba(36, 0, 128, .3);
    max-width: 400px;
    margin: 10px;
    padding: 0 5 30 5;
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    color: white
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.54),
                    0 17px 50px 0 rgba(0,0,0,0.19);
`;

const H1 = styled.h1`
    padding: 0 0 0 10px;
`;

const P = styled.p`
    color: white
    padding-left: 10px;
    padding-right: 10px;
`;

const IconBar = styled.button`
    color: white;
    font-family: "Franklin Gothic Medium";
    border: solid 0px black;
    background: #fb2745;
    font-size: 42px;
    display:flex;
    justify-content: flex-start;
`;

export {
    ButtonBar,
    DivBar,
    Container,
    Square,
    Divisor,
    InnerContent,
    InnerContainer,
    P,
    H1,
    ButtonIntro,
    IconBar
};