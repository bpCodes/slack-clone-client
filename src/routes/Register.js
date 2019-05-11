import React from 'react'
import { Button, Header, Container, Input } from "semantic-ui-react";
import { gql, graphql } from 'react-apollo'


class Register extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
  };
  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state
    })
    console.log(response)
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { username, email, password } = this.state
    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Input
          fluid
          name="username"
          onChange={this.onChange}
          value={username}
          placeholder="username"
        />
        <Input
          fluid
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="email"
        />
        <Input
          fluid
          type="password"
          name="password"
          onChange={this.onChange}
          value={password}
          placeholder="password"
        />
        <Button onClick={this.onSubmit} >Submit</Button>
      </Container>
    );
  }
}

const registerMutation = gql `
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`

export default graphql(registerMutation)(Register)