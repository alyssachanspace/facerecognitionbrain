import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  onSubmitRegister = () => {
    const { name, email, password } = this.state
    fetch('https://tranquil-inlet-50338.herokuapp.com/register', {
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password })
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        } else {
          alert('Incorrect form submission')
        }
      })
  }

  render() {
    const { onRouteChange } = this.props
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-90 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register" 
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('signin')} className="f6 link dim black db pointer">Already have an account?</p>
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default Register