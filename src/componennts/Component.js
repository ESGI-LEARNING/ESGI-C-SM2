export class Component {
  constructor() {
    this.state = {};
    this.props = {};
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    renderComponent(this);
  }

  render() {
    return null;
  }
}