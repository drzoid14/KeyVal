import React, { Component } from 'react'
import styles from './Parent.scss'



class Parent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            child: [{ key: "", value: "" }],
            json: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addChild = this.addChild.bind(this)
        this.onChangeKey = this.onChangeKey.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    addChild(event) {
        event.preventDefault()
        console.log('new row')
        this.setState({
            child: this.state.child.concat({
                key: "",
                value: ""
            })

        })
    }

    onChangeKey(e) {
        let id = e.target.className
        let current = this.state.child[id]
        current.key = e.target.value
        let holder = this.state.child
        this.setState({
            child: holder
        })
    }



    onChangeValue(e) {
        let id = e.target.className
        let current = this.state.child[id]
        current.value = e.target.value
        let holder = this.state.child
        this.setState({
            child: holder
        })
    }

    handleDelete(e) {
        let id = e.target.className
        let current = this.state.child[id]
        console.log("Deleting row className " + { id })
        let result = this.state.child.filter(function (ele) {
            return ele.key != current.key
        })

        this.setState({
            child: result
        })


    }

    handleSubmit(e) {
        e.preventDefault()

        this.state.child.map((child) => {
            let keyholder = child.key;
            let valueholder = child.value
            this.state.json[keyholder] = valueholder
        }
        )
        console.log("Returning json")
        console.log(this.state.json)

    }



    render() {

        const Children = this.state.child.map((child, index) =>
            <span key={index} className={index}>
                <input
                    type="text"
                    placeholder="key"
                    ref={(input) => this.textInput = input}
                    className={index}
                    onChange={this.onChangeKey}
                    value={this.state.child[index].key}
                />
                <input
                    type="value"
                    placeholder="value"
                    ref={(input) => this.textInput = input}
                    onChange={this.onChangeValue}
                    className={index}
                    value={this.state.child[index].value}
                />
                <button type="button" className={index} onClick={this.handleDelete}>x</button>
            </span>
        )

        return (
            <div className={styles.parent}>
                <div className={styles.top}>
                    <h1>Hey Look A Title</h1>
                </div>
                <div className={styles.header}>
                    <p>This is My Brillianty Creative Header</p>
                    <button type="button" onClick={this.addChild}>+</button>
                </div>
                <form className={styles.form}
                    onSubmit={this.handleSubmit} >
                    {Children}

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Parent