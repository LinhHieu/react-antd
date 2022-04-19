// import React from 'react';
// import styled from 'styled-components';

// interface AuthLayoutProps {
//     children?: React.ReactNode
// }

// const Layout = styled.div`
//     width: 100vw;
//     background: #2ECF94;
//     height: 100vh;
// `;

// export default function AuthLayout({children}: AuthLayoutProps) {
//   return (
//     <Layout>
//         {children}
//     </Layout>
//   )
// }


import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png';
import Background from '../Assets/Background.png'

interface AuthLayoutProps {
    children?: React.ReactNode
}

const Layout = styled.div`
    width: 100vw;
    background: #2ECF94;
    height: 100vh;
`;

const StyledLoginFooter = styled.div`
    position: absolute;
    color: #FFFFFF;
    top: 75%;
    left: 45%;
    text-align: center;
    a{
        color: #FFFFFF;
        text-decoration: underline;
    }
   
`

const MainScreen = styled.div`
    padding: 30px 100px;
    position: absolute;
    width: 36%;
    left: 32%;
    top: 20%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: #FFFFFF;
`
const ImgLogo = styled.img`
    padding-top: 50px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 128px;
`
const ImgBackground = styled.img`
    position: absolute;
    top: -20px;
    left: 0px;
    width: 100%;
    opacity: 0.1;
`

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <Layout>
        <ImgBackground src={Background} />
        <ImgLogo src={logo} />
        <MainScreen>
            {children}
        </MainScreen>
        <StyledLoginFooter>
            <p>©2019 - Otrafy Technology</p>
            <a href="">Term of Services</a><a> | </a><a href="">Privacy Policy</a>
        </StyledLoginFooter>
    </Layout>
  )
}