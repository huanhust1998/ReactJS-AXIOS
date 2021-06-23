import React, {useState} from "react";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import UserService from "../../service/UserService";

function Login() {
    const [state, setState] = useState({
        id: "",
        password: ""
    })
    const [validate, setValidate] = useState(false)
    let history = useHistory();

    function handleGetValueLogin(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        setValidate(false);
    }

    function handleLogin(e) {
        let formLogin = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (!formLogin.checkValidity()) {
            setValidate(true)
        } else {
            UserService.login(state.id, state.password).then(response => {
                if (response.status === 200) {
                    history.push("/home");
                }
            })
        }
    }

    return (
        <div className="container text-center">
            <h3 className="text-center font-weight-bold mt-5">관리자 로그인</h3>
            <div id="login-box" className="col-md-12">
                <form id="login-form" onSubmit={handleLogin} noValidate
                      className={`${(validate === true) ? ' was-validated' : ''}`}>
                    {/*<img className="text-center" src="/public/logo192.png"/>*/}
                    <div className="form-group">
                        <label htmlFor="username">아이디</label><br/>
                        <input type="phone" required name="id" id="username" placeholder="아이디를 입력해주세요."
                               onChange={handleGetValueLogin}
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label><br/>
                        <input type="password" required min={5} max={12} name="password" id="password"
                               placeholder="비밀번호를 입력해주세요."
                               onChange={handleGetValueLogin}
                               className="form-control"/>
                    </div>
                    <div>
                        <label></label>
                        <button type="submit"
                                className="btn btn-info btn-lg btn-block">로그인
                        </button>
                    </div>
                    <br/>
                </form>
                <p className="text-center"><Link className="text-decoration-none text-info"
                                                 to="/forgot-password">비밀번호를
                    잊어버리셨나요?</Link></p>
            </div>
        </div>
    )
}

export default Login