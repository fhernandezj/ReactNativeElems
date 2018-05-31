import React from 'react';
import { Button, 
    View, 
    Text, 
    YellowBox,
    Image,
    ScrollView,
    TextInput,
    Dimensions
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class HorizScroll extends React.Component {
    static navigationOptions = {
        title: 'Horizontal Scroll',
    };
    render(){
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}>
                <View style={{ 
                    backgroundColor: '#5f9ea0',
                    flex: 1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',}}
                        >
                        Screen 1
                    </Text>
                </View>

                <View style={{ 
                    backgroundColor: 'tomato',
                    flex: 1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',}}
                        >
                        Screen 2
                    </Text>
                </View>

                <View style={{ 
                    backgroundColor: '#5f9ea0',
                    flex: 1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',}}
                        >
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        )
    }
}