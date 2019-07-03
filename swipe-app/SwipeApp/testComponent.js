import React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';
export class TestComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            name: 'Hassaan',
            age: 20
        }
    }
    render() {
        return(
            <View>
                <Text>Hello, my name is {this.state.name}!</Text>
                <Text>My age is {this.state.age}</Text>

                {/* On Press below triggers the called function when pressed */}
                <TouchableOpacity onPress = {this.ageUp}>
                    <Text>Click me to age up</Text>
                </TouchableOpacity>
            </View>
        )
    }
    // Function declared below
    ageUp = () => {
        let currentAge = this.state.age;
        currentAge++;

        // Built in function to access state 
        this.setState({
            age: currentAge
        })

    }
}