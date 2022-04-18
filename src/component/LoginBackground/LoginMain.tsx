import styled from 'styled-components';
import Login from '../../page/Login/Login';

const MainScreen = styled.div`
    padding: 30px 100px;
    position: absolute;
    margin: auto;
    width: 36%;
    left: 32%;
    top: 200px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: #FFFFFF;
`

const LoginMain = () =>{
    return (
        <MainScreen>
            <Login />
        </MainScreen>
    )
}

export default LoginMain;