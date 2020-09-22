import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { openUrl } from '@mrn/mrn-utils';

const name = 'czf';

export default class MyComponent extends React.PureComponent {

    getName () {
        /**openUrl('https://www.meituan.com', {
            name: name,
            age: 30
        });*/
        openUrl('https://www.meituan.com');
    }

    render () {
        return (
            <View>
                <Text style={{fontSize: 16, borderRadius: 1.5}}>hel<Text>jjsj</Text>lo</Text>
                <Text style={{fontSize: 15}}>hello</Text>
                <ImageBackground imageStyle={{resizeMode: 'cover'}}>
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

import http from 'src/common/util/http';
export default class DetailPageService {
    async fetchConfirmStatement(stmtId, businessType) {
        const requestConfig = {
            url: 'v1/finance/confirmStatement',
            method: 'POST',
            contentType: 'form',
            data: {
                stmtId: stmtId,
                businessType: businessType
            }
        };
        return http(requestConfig);
    }
  	async fetchConfirmStatement1(stmtId, businessType) {
        return http({
            url: 'v1/finance/confirmStatement',
            method: 'POST',
            contentType: 'form',
            body: {
                stmtId: stmtId,
                businessType: businessType
            }
        });
    }
}
