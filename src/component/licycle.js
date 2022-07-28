import React from "react";

class ParentComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChangeName = value => {
        this.setState({ name: value })
    }

    render() {
        return <LifeCycleComponent name={this.state.name} changeName={this.handleChangeName} />
    }
}

class LifeCycleComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps")
        if (nextProps.name !== prevState.name) {
            return {
                name: nextProps.name
            }
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    changeInput = (e) => {
        this.props.changeName(e.target.value)
    }


    render() {
        console.log("render")
        return <div>
            <h3>Demo life cycle react app</h3>
            <input value={this.state.name} onChange={this.changeInput} />
            <p><a href="/hook">React hook</a></p>
        </div>
    }
}

export default ParentComponent;