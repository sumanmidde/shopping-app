
import React, { useState } from 'react';

let Login = () => {
    // Object destructuring useState has two properties [intialValue , updatedValu]=useState("initialValue palce") instaded of state.
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div className="row">
            <div className="col-lg-5 col-md-7 mx-auto ">
                <div className="card-border-success shadow-lg my-2">
                    <div className="card-header border-bottom border-success ">
                        <h3 style={{ fontSize: "30px" }} className="text-center text-success">
                            Login
                        </h3>
                    </div>
                    {/* card body with fields */}
                    <div className="card-body border-bottom border-success">
                        {/* email start */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="form-control" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value); }}></input>
                        </div>
                        {/* email end */}
                        {/* password start         event is an syntatic event which is created by the Broswer by default */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value); }}></input>
                        </div>
                        {/* password end */}
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Login;