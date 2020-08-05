import React from "react";
import axios from 'axios';
import { apiBaseUrl } from '../configs';

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                isAuthenticated: null,
            }
        }

        componentDidMount = async () => {
            let isAuthenticated = null;
            const userToken = localStorage.getItem('user_token');

            if (userToken) {
                const authenticationResult = await axios({
                    method: 'POST',
                    url: `${apiBaseUrl}/user/authentication`,
                    data: { 'userToken': userToken }
                });

                if (authenticationResult && authenticationResult.data && authenticationResult.data.email) {
                    isAuthenticated = true;
                    this.props.userCreateAccountSuccessAction(authenticationResult.data);

                } else {
                    isAuthenticated = false;
                }
            } else {
                isAuthenticated = false;
            }

            this.setState({ isAuthenticated: true });
        }

        render() {
            const loginErrorMessage = (
                <div>
                    Please <a href="/login">login</a> in order to view this part of the application.
                </div>
            );

            const { isAuthenticated } = this.state;

            return (
                <>
                    { isAuthenticated === true ? <Component {...this.props} /> : loginErrorMessage }
                </>
            );
        }
    };
}

export default requireAuthentication;
