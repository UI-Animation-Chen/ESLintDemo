import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class MyComponent extends React.PureComponent {

    render () {
        return (
            <View>
                <Text style={{fontSize: 16, borderRadius: 1}}>hello</Text>
                <Text style={{fontSize: 15}}>hello</Text>
                <ImageBackground style={{resizeMode: 'cover'}}>
                    <Text style={{fontSize: 14}}>world</Text>
                </ImageBackground>
            </View>
        );
    }

}

import { createStackNavigator } from '@mrn/react-navigation';
import HomePage from './home/page';

const rootStack = createStackNavigator(
    {
        MainHome: {
            screen: HomePage,
            navigationOptions: () => ({
                title: 'Home',
                header: <View />
            })
        }
    },
    {
        initialRouteName: 'MainHome',
        useDowngrade: process.env.NODE_ENV === 'development' ? false : true
    }
);
export { rootStack };

