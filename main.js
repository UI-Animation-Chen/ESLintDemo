import React from 'react';
import { View, Text } from 'react-native';

export default class MyComponent extends React.PureComponent {

    render () {
        return (
            <View>
                <Text style={{fontSize: 16}}>hello</Text>
                <Text style={{fontStyle: 'italy'}}>hello</Text>
                <Text style={{fontSize: 14}}>world</Text>
            </View>
        );
    }

}

