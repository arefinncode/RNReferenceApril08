/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
// import type {Node} from 'react';

export interface Props {
    // navigation:NavigationRoute,
    // props: {
    // },
    // navigation:any,
}

import Swipeable from 'react-native-gesture-handler/Swipeable';

// import { StyleSheet, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {
    LongPressGestureHandler,
    State,
    TapGestureHandler,
} from 'react-native-gesture-handler';



import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    useWindowDimensions,
    View,
    Animated,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App: React.FC<Props> = ({props}) => {
    // const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const RightActions = () => {



        console.log(`Swipeable.defaultProps: ${Swipeable.defaultProps}`);
        console.log(' 1  onSwipeableWillClose: ');
    };

    const RightActions2 = () => {

        console.log(' 2 onSwipeableClose : ');

    };

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    // progressAnimatedValue: Animated.AnimatedInterpolation,
    //     dragAnimatedValue: Animated.AnimatedInterpolation

    const renderRightActions = (
        progress: Animated.AnimatedInterpolation,
        dragX: Animated.AnimatedInterpolation,
    ) => {

        console.log('dragX: ', dragX);

        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });

        return (
            <RectButton style={{}} onPress={() => console.log('ff')}>
                <Animated.Text
                    style={[
                        {
                            transform: [{translateX: trans}],
                        },
                    ]}>
                    Archive R-R-Actions
                </Animated.Text>
            </RectButton>
        );


    };
    const renderLeftActions = (
        progress: Animated.AnimatedInterpolation,
        dragX: Animated.AnimatedInterpolation,
    ) => {
        console.log('(renderLeftActions) dragX: ', dragX);

        // const trans = dragX.interpolate({
        //     inputRange: [0, 50, 100, 101],
        //     outputRange: [-20, 0, 0, 1],
        // });
        //
        //
        // return (null);

        // return (
        //     <RectButton style={{}} onPress={() => console.log('ff')}>
        //         <Animated.Text
        //             style={[
        //                 {
        //                     transform: [{translateX: trans}],
        //                 },
        //             ]}>
        //             Archive R-L-Actions
        //         </Animated.Text>
        //     </RectButton>
        // );
    };

    const doubleTapRef = useRef(null);
    const deviceWidth = useWindowDimensions().width;

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Swipeable
                        renderLeftActions={renderLeftActions}

                        renderRightActions={renderRightActions}
                        rightThreshold={deviceWidth}
                        leftThreshold={deviceWidth}
                        overshootRight={true} // false also...
                        overshootLeft={true} // true // false // false
                        onSwipeableRightOpen={() => console.log('ssee')}
                        onSwipeableRightWillOpen={() => console.log('ssqq')}
                        onSwipeableOpen={() => console.log('ssww')}
                        onSwipeableWillOpen={() => console.log('ssaa')}
                        onSwipeableLeftOpen={() => console.log('sszz')}
                        onSwipeableLeftWillOpen={() => console.log('ssxx')}
                        // containerStyle={{backgroundColor: 'red'}}
                        containerStyle={{backgroundColor: 'transparent'}}
                        childrenContainerStyle={{backgroundColor: 'blue'}}
                        onSwipeableWillClose={RightActions}
                        onSwipeableClose={RightActions2}>
                        <LongPressGestureHandler
                            onHandlerStateChange={(event) => {
                                if (event.nativeEvent.state === State.ACTIVE) {
                                    console.log('props.minDurationMsState: ', props);
                                }

                                // if(State.)
                            }}
                            // key={props.flatListDataIndex}
                            minDurationMs={100}>
                            <TapGestureHandler
                                waitFor={doubleTapRef}
                                onHandlerStateChange={(event) => {
                                    if (event.nativeEvent.state === State.ACTIVE) {
                                    }
                                }}>
                                <TapGestureHandler
                                    ref={doubleTapRef}
                                    numberOfTaps={2}
                                    maxDelayMs={500}
                                    onHandlerStateChange={(event) => {
                                        if (event.nativeEvent.state === State.ACTIVE) {
                                            console.log('SOS');
                                        }
                                    }}>
                                    <View
                                        style={[
                                            {
                                                flexDirection: 'row-reverse',
                                                alignSelf: 'flex-end',
                                                marginVertical: 5,
                                            },
                                            {
                                                width: deviceWidth / 2,
                                            },
                                        ]}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                // alignItems: 'flex-start',
                                                margin: 7,
                                            }}>
                                            <View
                                                style={[
                                                    {
                                                        width: deviceWidth / 2,
                                                        // width: 220,
                                                        borderRadius: 15,
                                                        borderWidth: 1,
                                                        borderColor: 'gray',
                                                        backgroundColor: '#000000',
                                                        padding: 10,
                                                        shadowColor: '#3d3d3d',
                                                        shadowRadius: 2,
                                                        shadowOpacity: 0.5,
                                                        shadowOffset: {
                                                            width: 1,
                                                            height: 1,
                                                        },
                                                    },

                                                    {
                                                        backgroundColor: 'black',
                                                    },
                                                ]}>
                                                <Text
                                                    style={{
                                                        fontSize: 15,
                                                        color: '#ffffff',
                                                        fontWeight: '600',
                                                        textAlign: 'right',
                                                    }}>
                                                    props.oneCommentData.message
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TapGestureHandler>
                            </TapGestureHandler>
                        </LongPressGestureHandler>
                    </Swipeable>

                    {/*<LearnMoreLinks />*/}

                    <Swipeable renderLeftActions={renderLeftActions}>
                        <React.Fragment>
                            <Section title="Learn More">
                                Read the docs to discover what to do next:
                            </Section>
                            <Text>"hello"</Text>
                        </React.Fragment>
                    </Swipeable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
