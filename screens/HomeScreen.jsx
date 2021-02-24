import React from 'react';
import { Dimensions, View, StyleSheet, Image, FlatList, Text, SafeAreaView } from 'react-native';
import appstyles from '../styles/config';
import Headerbar from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome';

import Card from '../components/challangecard'

const challanges = [
  {
      id: "123",
      uri: require('../assets/images/PUBG-mobile-1.jpg'),
      name: "PUBG"
  },
  {
    id: "456",
    uri: require('../assets/images/Free-Fire-1200.jpg'),
    name: "FREEFIRE"
  },
  {
      id: "789",
      uri: require('../assets/images/fortnite.jpg'),
      name: "FORTNITE"
  },

]

const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
    <Headerbar headText="DesiAdda" context={false}/>
            <View style={styles.container}>

                <FlatList 
                    data={challanges}
                    renderItem={({item}) => <View style={styles.imgcontainer}>
                        <Image source={item.uri} 
                        style={styles.image}/>
                        </View>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.matchContainer}>

                    <View style={styles.componentHeader}>
                        <Text style={[styles.filterText,{color: '#a1a1a1'}]}>All Matches</Text>
                        <View style={styles.filterContainer}>
                            <Icon name="sliders" size={30} color="#fff"/>
                            <Text style={styles.filterText}>filters</Text>
                        </View>
                    </View>
             
                    <Card source={require("../assets/images/images.png")} title="PUBG Erangle - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={true}/>
                </View>
            </View>
            </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imgcontainer: {
        height: Dimensions.get('window').height/3,
        borderRadius: 10,
        overflow: 'hidden',
        width: Dimensions.get('window').width - 30,
        margin: 10
    },
    image: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width - 30
    },
    matchContainer: {
        flex: 1,
        width: Dimensions.get('window').width - 30,
        justifyContent: 'center'
    },
    componentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    flatList: {
        maxHeight: (Dimensions.get('window').height)/2.75,
    },
    filterText: {
        textTransform: 'uppercase', 
        color: '#fff', 
        marginLeft: 10, 
        fontSize: 16,
        marginTop: 5
    }
})

export default HomeScreen;