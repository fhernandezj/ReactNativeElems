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

export default class ScrollScreen extends React.Component {    
    static navigationOptions = {
        title: 'Vertical Scroll',
    };
    render(){
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView
                keyboardDismissMode='on-drag'>
                <Image
                    source={require('../images/cat.jpeg')}
                    style={{width: screenWidth, height: screenWidth*173/304}}
                >                    
                </Image>
                <Text
                    style={{
                        fontSize:20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'green'}}
                >
                    This is a text
                </Text>
                <TextInput
                    style={{padding: 10, margin: 10, borderWidth: 1}}
                    placeholder='Enter text'>
                </TextInput>
                <View style={{backgroundColor: '#a83b51', height: 50}}>
                    <Text
                        style={{
                            fontSize:20,
                            padding: 15,
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        Text inside a View
                    </Text>
                </View>
                <Image
                    source={require('../images/cat.jpeg')}
                    style={{width: screenWidth, height: screenWidth*173/304}}
                >                    
                </Image>
                <Image
                    source={require('../images/cat.jpeg')}
                    style={{width: screenWidth, height: screenWidth*173/304}}
                >                    
                </Image>
                <Image
                    source={require('../images/cat.jpeg')}
                    style={{width: screenWidth, height: screenWidth*173/304}}
                >                    
                </Image>
                <Image
                    source={require('../images/cat.jpeg')}
                    style={{width: screenWidth, height: screenWidth*173/304}}
                >                    
                </Image>
                <Image
                    source={require('../images/cat.jpeg')}
                    style={{width: screenWidth, height: screenWidth*173/304}}
                >                    
                </Image>
            </ScrollView>
        )
    }
}