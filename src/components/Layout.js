import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Menu, MenuMenu, Segment } from "semantic-ui-react";
import { useAuth } from "../contexts/AuthContext";


export default () => {
    const { isAuthenticated, logout, loginUser } = useAuth();

    return (
        <>
            <Container>
                <h1 className="ui header">
                    <i className="icon settings" />
                    <div className="content">
                        JWT Front-end
                    </div>
                </h1>

                <Menu pointing secondary>
                    <Menu.Item
                        as={NavLink}
                        to="/"
                        name="home"
                    />


                    {!isAuthenticated && <Menu.Item
                        as={NavLink}
                        to="/signin"
                        name="signin"
                    />}

                    {!isAuthenticated && <Menu.Item
                        as={NavLink}
                        to="/signup"
                        name="signup"
                    />}

                    {
                        isAuthenticated && <Menu.Item
                        as={NavLink}
                        to="/me"
                        name="me"
                    />
                    }

                    {
                        isAuthenticated && <Menu.Menu position="right">
                            <Menu.Item
                                name="logout"
                                onClick={logout}
                                content={`${loginUser?.email} - Logout`}
                            />
                        </Menu.Menu>
                    }

                </Menu>
                {isAuthenticated && <button onClick={logout}>Logout</button>}
                <Segment>
                    <Outlet />
                </Segment>

            </Container>


        </>
    )
}