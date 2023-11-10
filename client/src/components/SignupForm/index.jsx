import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations.js';

import Auth from '../../utils/auth.js';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="">
      <div className="">
        <div className="">
          <h4 className="">Sign Up</h4>
          <div className="">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
<<<<<<< HEAD
                  className="form-input"
                  placeholder="Your username"
=======
                  className="signup-form-input"
                  placeholder="Create a Username"
>>>>>>> 3998596 (lots of css)
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
<<<<<<< HEAD
                  className="form-input"
                  placeholder="Your email"
=======
                  className="signup-form-input"
                  placeholder="Enter Email"
>>>>>>> 3998596 (lots of css)
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
<<<<<<< HEAD
                  className="form-input"
                  placeholder="******"
=======
                  className="signup-form-input"
                  placeholder="Create a Password"
>>>>>>> 3998596 (lots of css)
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className=""
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
