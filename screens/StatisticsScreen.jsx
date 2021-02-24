import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import appstyles from '../styles/config';
import HeaderBar from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons'

const Data = [
    {
        rank: '1',
        playername: 'Devil',
        kills: 30,
        winning: 30
    },
    {
        rank: '2',
        playername: 'SomanathSahise',
        kills: 20,
        winning: 25

    },
    {
        rank: '3',
        playername: 'Harisingh',
        kills: 14,
        winning: 20
    },
    {
        rank: '4',
        playername: 'Hawk Admiral',
        kills: 5,
        winning: 20
    },
    {
        rank: '5',
        playername: 'Technical Tech',
        kills: 3,
        winning: 10
    },
    {
        rank: '6',
        playername: 'Fearless',
        kills: 4,
        winning: 15
    },
    {
        rank: '7',
        playername: 'Dilip',
        kills: 2,
        winning: 5
    },
    {
        rank: '8',
        playername: 'Op Rahul',
        kills: 8,
        winning: 3
    },
    {
        rank: '9',
        playername: 'Saaho',
        kills: 3,
        winning: 4
    },

]

const StatisticsScreen = () => {
    const renderItem = (item) => {
        return (
            <View style={styles.dataContainer}>
            <Text style={[styles.dataTxt,{width: 40}]}>{item.rank}</Text>
            <Text style={[styles.dataTxt,{width: Dimensions.get('window').width/2}]}>{item.playername}</Text>
            <Text style={[styles.dataTxt,{width: 60}]}>{item.kills}</Text>
            <Text style={[styles.dataTxt,{width: 60}]}>{item.winning}</Text>
 
        </View>
        )
    }
    return (
        <View style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
            <HeaderBar headTxt="Match Results" context={true}/>
            <View style={styles.container}>
                    <View style={styles.matchDetails}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={styles.GameImage} source={require("../assets/images/images.png")}/>
                        <View>
                            <Text style={{color: appstyles.fontColor, fontSize: 16}}>PUBG Erangle - Solo Battle</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}><Icon name="time-outline" size={22} color={appstyles.fontColorInactive}/><Text style={{color: appstyles.fontColorInactive, marginLeft: 5}}>11 Aug at 11:00 AM</Text></View>
                        </View>
                    </View>
                    <View style={styles.gameDetails}>
                        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={styles.inactiveHead}>Entry Fee</Text>
                            <Text style={styles.activeHead}>₹50</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={styles.inactiveHead}>Price</Text>
                            <Text style={styles.activeHead}>₹5,000</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={styles.inactiveHead}>Per Kill</Text>
                            <Text style={styles.activeHead}>₹40</Text>
                        </View>
                     </View>
                 </View> 
                 <View style={{flex: 1, width: Dimensions.get('window').width, paddingHorizontal: 25}}>
                    <View style={styles.dataContainer}>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive, width: 40}]}>#</Text>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive, width: Dimensions.get('window').width/2}]}>Player Name</Text>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive, width: 60}]}>Kills</Text>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive}]}>Winning</Text>
                    </View>
                    <FlatList
                        data={Data}
                        renderItem={({item}) => renderItem(item)}
                        keyExtractor={item => item.rank}
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    matchDetails:{
        padding: 20,
        width: Dimensions.get('window').width,
        borderBottomColor: appstyles.secondaryColor,
        borderBottomWidth: 1
    },
    inactiveHead: {
        color: appstyles.fontColorInactive,
        fontSize: 14
    },
    activeHead: {
        color: appstyles.fontColor,
        fontSize: 14.5
    },
    GameImage:{
        height: 120,
        width: 120,
        borderRadius: 10,
        marginRight: 15
    },
    gameDetails:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 25
    },
    dataTxt:{
        color: appstyles.fontColor
    },
    dataContainer: {
        flexDirection: 'row', 
        width: '100%', 
        paddingVertical: 10,
    }
})

export default StatisticsScreen;
