import React from 'react';
import { WithContextConsumer } from 'smart-context';

class ClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  updateData() {
    const {
      actions: { updateUser }
    } = this.props.user;
    // default action handler (payload is object with exact key names declared in config)
    updateUser({
      name: 'John',
      email: 'john@abc.com'
    });
  }

  resetData() {
    const {
      actions: { reset }
    } = this.props.user;
    reset();
  }

  render() {
    const {
      state: { name, email }
    } = this.props.user;
    return (
      <div className="container">
        <h2>Context1</h2>
        <p>Flat state object. Loads user data.</p>
        {name && <p>Name: {name}</p>}
        {email && <p>Email: {email}</p>}
        <button onClick={this.updateData}>Update</button>
        <button onClick={this.resetData}>Reset</button>
      </div>
    );
  }
}

/**
 * Wrap component in hoc to access all the contexts
 * Pass array of display names
 */
export default WithContextConsumer(ClassComp, ['user']);
