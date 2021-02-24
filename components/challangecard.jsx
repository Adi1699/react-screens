import React from 'react'
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import appstyles from '../styles/config'
import Icon from "react-native-vector-icons/Ionicons";
import {Svg,Path} from 'react-native-svg'

const challangecard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.challangeDetails}>
                <Image source={props.source} style={styles.challangeImage}/>
                <View>
                    <Text style={{color: appstyles.fontColor, fontFamily: 'Poppins-Medium', fontSize: 14}}>{props.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Icon name="time-outline" size={22} color={appstyles.fontColorInactive}/><Text style={{color: appstyles.fontColorInactive, fontFamily: 'Poppins-Light', marginLeft: 5}}>{props.date}</Text></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}><Icon name="trophy-outline" size={23} color="green"/><Text style={{color: 'green', fontSize: 15, fontFamily: 'Poppins-Medium', marginLeft: 5}}>{props.price}</Text></View>
                </View>
            </View>
            <View style={[styles.challangeDetails,{flexDirection: 'column'}]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 16}}>
                    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.inactiveHead}>Per Kill</Text>
                        <Text style={styles.activeHead}>{props.rewardperkill}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.inactiveHead}>Type</Text>
                        <Text style={styles.activeHead}>Solo</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.inactiveHead}>Version</Text>
                        <Text style={styles.activeHead}>TPP</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.inactiveHead}>Map</Text>
                        <Text style={styles.activeHead}>Erangle</Text>
                    </View>
                </View>
                {
                    props.chcontext
                    ?
                    <View style={{width: '100%', marginTop: 10}}>
                        <View style={styles.progressContainer}>
                            <View style={styles.progress}></View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginTop: 8}}>
                            <Text style={{fontFamily: 'Poppins-Medium', color: appstyles.fontColoractive}}>80 spots left</Text>
                            <Text style={{fontFamily: 'Poppins-Light', color: appstyles.fontColorInactive}}>20/100</Text>
                        </View>
                    </View>
                    :
                    <View></View>
                }
                <View style={styles.entryDetails}>
                    <View style={{flexDirection: 'row', width: '70%', height: '100%', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Poppins-Medium', color: '#666666', fontSize: 16}}>ENTRY FEE</Text>
                        <Text style={{fontFamily: 'Poppins-Medium', color: appstyles.fontColor, fontSize: 16, marginLeft: 10}}>₹50</Text>
                    </View>
                    {
                        props.chcontext
                        ?
                        <TouchableOpacity style={{height: '100%', width: '30%', alignItems: 'center', justifyContent: 'center', backgroundColor: appstyles.fontColoractive}}>
                            <Text style={{color: appstyles.fontColor, fontFamily: 'Poppins-Medium', fontSize: 16}}>Join</Text>
                        </TouchableOpacity>
                        :
                        <View style={{width: '30%', alignItems: 'flex-end', justifyContent: 'center', paddingRight: 16}}>
                            <Svg id="Capa_1" enable-background="new 0 0 30 30" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg">
                                <Path fill="#fff" d="m446 262h-79.077c20.559-27.284 28.899-61.821 21.593-95.281-8.262-37.841-34.599-62.587-49.562-73.97-4.645-3.532-10.915-4.051-16.076-1.331-5.162 2.721-8.277 8.187-7.987 14.015.377 7.598-4.316 14.745-11.957 18.208-3.015 1.366-6.084 1.972-8.951 2.131 8.671-30.79 7.605-57.8-3.21-80.478-15.925-33.39-47.344-44.101-48.673-44.541-3.874-1.278-8.106-.915-11.716.99-3.608 1.905-6.289 5.212-7.417 9.134-.147.513-15.225 51.698-56.913 88.7-21.145 18.77-35.436 40.712-41.327 63.454-2.968 11.457-5.734 29.526-2.052 50.539 3.118 17.795 10.201 34.039 21.064 48.43h-77.739c-24.813 0-45 20.187-45 45v160c0 24.813 20.187 45 45 45h380c24.813 0 45-20.187 45-45v-160c0-24.813-20.187-45-45-45zm-273.651-12.37c-27.321-30.645-22.095-65.509-18.581-79.076 4.393-16.955 15.528-33.741 32.201-48.541 32.704-29.027 50.951-64.669 59.567-85.51 6.293 4.645 13.518 11.771 18.35 22.112 8.879 19.005 7.69 43.694-3.535 73.384-2.84 7.514.742 15.931 8.125 19.093 3.996 1.713 25.039 9.75 46.84-.126 9.375-4.249 16.95-10.918 22.089-18.994 9.086 10.185 18.051 23.972 21.801 41.147 7.163 32.806-6.162 67.205-34.053 88.88h-14.342c1.954-15.073-1.906-30.568-11.407-43.139l-31.437-41.602c-2.835-3.752-7.265-5.957-11.967-5.957s-9.132 2.205-11.967 5.957l-31.437 41.601c-9.501 12.573-13.357 28.067-11.399 43.14h-15.177c-5.251-3.909-9.759-7.979-13.671-12.369zm59.405 12.37c-1.978-7.468-1.502-16.746 4.776-25.053l19.47-25.765 19.47 25.766c6.278 8.306 6.754 17.585 4.776 25.052zm229.246 205c0 8.271-6.729 15-15 15h-380c-8.271 0-15-6.729-15-15v-160c0-8.271 6.729-15 15-15h380c8.271 0 15 6.729 15 15z"/>
                                <Path fill="#fff" d="m141.886 421.916c-.028 0-.058 0-.086 0-6.785.038-13.934.066-19.933.078v-84.994c0-8.284-6.716-15-15-15s-15 6.716-15 15v99.916c0 7.307 5.265 13.55 12.466 14.784 1.08.186 1.794.309 12.96.309 5.387 0 13.209-.029 24.674-.093 8.284-.047 14.962-6.8 14.916-15.084-.046-8.256-6.752-14.916-14.997-14.916z"/>
                                <Path fill="#fff" d="m191.888 322c-8.284 0-15 6.716-15 15v100c0 8.284 6.716 15 15 15s15-6.716 15-15v-100c0-8.284-6.716-15-15-15z"/>
                                <Path fill="#fff" d="m405.133 352c8.284 0 15-6.716 15-15s-6.716-15-15-15h-42.136c-8.284 0-15 6.716-15 15v100c0 8.284 6.716 15 15 15h42.136c8.284 0 15-6.716 15-15s-6.716-15-15-15h-27.136v-20h24.029c8.284 0 15-6.716 15-15s-6.716-15-15-15h-24.029v-20z"/>
                                <Path fill="#fff" d="m317.725 322.948c-7.858-2.612-16.352 1.644-18.964 9.507l-20.818 62.665-21.882-63.039c-2.716-7.825-11.262-11.965-19.089-9.252-7.826 2.717-11.968 11.264-9.251 19.09l34.19 98.498c.012.034.023.067.036.102 2.444 6.88 8.969 11.481 16.261 11.481.04 0 .079 0 .118-.001 7.34-.05 13.859-4.753 16.221-11.702.011-.032.022-.065.033-.099l32.651-98.286c2.611-7.861-1.645-16.351-9.506-18.964z"/>
                            </Svg>
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: appstyles.secondaryColor,
        paddingTop: 16,
    },
    challangeDetails:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '100%'
    },
    challangeImage: {
        height: 100,
        width: 100,
        borderRadius: 8,
        marginRight: 16,
        resizeMode: 'contain'
    },
    inactiveHead: {
        color: appstyles.fontColorInactive,
        fontFamily: 'Poppins-Light',
        fontSize: 14
    },
    activeHead: {
        color: appstyles.fontColor,
        fontFamily: 'Poppins-Light',
        fontSize: 14.5
    },
    progressContainer: {
        width: '95%',
        backgroundColor: '#333333',
        borderRadius: 20,
        height: 12,
        overflow: 'hidden'
    },
    progress: {
        backgroundColor: appstyles.fontColoractive, 
        width: '25%', 
        height: '100%',
        borderRadius: 20
    },
    entryDetails: {
        width: Dimensions.get('window').width - 30,
        height: 50,
        backgroundColor: 'rgb(45,48,55)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        marginTop: 15
    },
})

export default challangecard
