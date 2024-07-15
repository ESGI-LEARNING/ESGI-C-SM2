export class Component {
    constructor() {
        this.state = {};
        this.props = {};
        this.observers = [];
    }

    componentDidMount() {
        return null;
    }

    setState(newState) {
        this.state = newState;
        this.notifyObservers();
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
    }

    render() {
        return null;
    }
}