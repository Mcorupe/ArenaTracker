// import React from "react";
// //import {login, signup, logout} from "../Services/authServices"
// //import Modal from "./modal";
// //import { BlurredBackground } from "../shared-styles";
// // import LoginForm from "./login";
// // import LogoutForm from "./logout";
// // import SignupForm from "./signup";
// // import SearchBar from "./searchBar";

// const HeaderBar = ({title}) => <header>{title}</header>;
// // ---------------------------------------------------------------------------------

import React, { Component } from 'react';
import {
  Button,
  Modal,
  TextArea,
  Input,
  Menu,
  Header,
  Grid,
  Icon
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeProvider';
import './Header.css';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      modalOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.closeAndSend = this.closeAndSend.bind(this);
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  closeAndSend() {
    const { addPost } = this.props;
    const { message } = this.state;
    console.log('running close and send');
    this.setState({ modalOpen: false, message: '' });
    addPost(message);
  }

  render() {
    const { handleFilter, filter} = this.props;
    //const {user}
    const { message } = this.state;
    //const email = user || 'email@gmail.com';
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <Menu
            color={theme.currentTheme === 'dark' ? 'black' : 'blue'}
            inverted
            borderless={false}
            fluid
            size="huge"
            widths={3}
            className={`header`}
          >
            <Menu.Item onClick={toggleTheme}>
              <Icon
                color={theme.currentTheme === 'dark' ? 'red' : 'white'}
                size="massive"
                name={theme.currentTheme === 'dark' ? 'empire' : 'rebel'}
              />
            </Menu.Item>
            <Menu.Item>
              <Grid.Row>
                <Header
                  size="huge"
                  as="h1"
                  color={theme.currentTheme === 'dark' ? 'red' : 'white'}
                >
                  {theme.currentTheme === 'dark'
                    ? 'Darth Twitter'
                    : 'Obi Wan Twitter'}
                </Header>
                <Modal
                  centered
                  trigger={
                    <Button
                      size="medium"
                      onClick={this.handleOpen}
                      data-testid="addPostButton"
                      style={{ marginRight: '20px' }}
                      color={theme.currentTheme === 'dark' ? 'red' : 'blue'}
                    >
                     
                    </Button>
                  }
                  open={this.state.modalOpen}
                  onClose={this.handleClose}
                  closeIcon
                  data-testid="modal"
                >
                  <Modal.Header
                    style={
                      theme.currentTheme === 'dark'
                        ? { backgroundColor: 'black' }
                        : { backgroundColor: 'blue' }
                    }
                  >
                    <h1
                      style={
                        theme.currentTheme === 'dark'
                          ? { color: 'red', textAlign: 'center' }
                          : { color: 'white', textAlign: 'center' }
                      }
                    >
                      Add New Post
                    </h1>
                  </Modal.Header>
                  <Modal.Content
                    style={
                      theme.currentTheme === 'dark'
                        ? { backgroundColor: 'black' }
                        : { backgroundColor: 'blue' }
                    }
                  >
                    <TextArea
                      placeholder="Tell us more"
                      data-testid="addPostText"
                      onChange={this.handleChange}
                      name="message"
                      autoHeight
                      rows={10}
                      style={{ width: '100%' }}
                      value={message}
                    />
                  </Modal.Content>
                  <Modal.Actions
                    style={
                      theme.currentTheme === 'dark'
                        ? { backgroundColor: 'black', textAlign: 'center' }
                        : { backgroundColor: 'blue', textAlign: 'center' }
                    }
                  >
                    <Button onClick={this.handleClose}>Close</Button>
                    <Button onClick={this.closeAndSend}>Submit</Button>
                  </Modal.Actions>
                </Modal>
                <Input
                  onChange={handleFilter}
                  placeholder="Search for chirps"
                  type="text"
                  name={filter}
                  action="Search"
                  size="medium"
                />
              </Grid.Row>
            </Menu.Item>
            
          </Menu>
        )}
      </ThemeContext.Consumer>
    );
  }
}

NavBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired
};

export default NavBar;