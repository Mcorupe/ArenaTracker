import React from "react";
import { withRouter } from "react-router";
import withAuth from "../../Components/withAuth";
import NavBar from "../../Components/Header/Header";
import { ThemeContext } from "../../ThemeProvider";


export default withRouter(
  withAuth(function Home(props) {
    const { user, handleFilter, filter } = props.authProps;
    
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className={`App
          ${theme.default}
          ${theme.horde}
          ${theme.ally}`
        }
          >
            <NavBar handleFilter={handleFilter} user={user} filter={filter} />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  })
);