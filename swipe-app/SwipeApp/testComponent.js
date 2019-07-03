import React from 'react';
import {Text, View,TouchableOpacity,StyleSheet } from 'react-native';
export class TestComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            age: this.props.age
        }
    }
    render() {
        return(
            <View>
                <Text style={styles.textStyle}>Hello, my name is {this.state.name}!</Text>
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
// Adding a stylesheet
const styles = StyleSheet.create({
    // Gotta create keys
    textStyle: {
        color: 'red',
        fontSize: 20,
        backgroundColor: 'cyan'
    }

})