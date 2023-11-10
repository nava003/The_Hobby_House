// import { useQuery } from '@apollo/client';

import Login from '../components/LoginForm';
import Signup from '../components/SignupForm';

const LoginSignup = () => {

  return (
    <main>
      <div className="box">
        <div
          className="card"
          // style={{ border: '1px dotted #1a1a1a' }}
        >
          <Login />
        </div>
        <div
          className="card"
          // style={{ border: '1px dotted #1a1a1a' }}
        >
          <Signup />
        </div>
      </div>
    </main>
  );
};

export default LoginSignup;
