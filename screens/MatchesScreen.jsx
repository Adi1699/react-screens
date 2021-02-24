import React from 'react';
import { SafeAreaView, View, StyleSheet,TouchableOpacity, Dimensions, Text} from 'react-native';
import appstyles from '../styles/config';
import HeaderBar from '../components/header';
import Card from '../components/challangecard'


const MatchesScreen = () => {
  return (
     <SafeAreaView style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
          <HeaderBar headTxt="My Matches" context={false} />
          <View style={styles.toptab}>
            <TouchableOpacity style={[styles.toptabSelectors, {borderBottomWidth: 6}]}>
               <Text style={[styles.toptabText,{color: appstyles.fontColoractive}]}>ONGOING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toptabSelectors}>
                <Text style={styles.toptabText}>COMPLETED</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}> 
                <Card source={require("../assets/images/images.png")} title="PUBG Erangle - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={false}/>
                <Card source={require("../assets/images/freefire.jpg")} title="Free Fire Ultimate" date="11 Aug at 01:00 PM" price="₹15,000" rewardperkill="₹150" chcontext={false}/>
          </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },
  toptab: {
      flexDirection: 'row',
      width: Dimensions.get('window').width,
      backgroundColor: appstyles.secondaryColor,
      height: 50
  },
  toptabSelectors: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 0,
      borderColor: appstyles.fontColoractive,
  },
  toptabText: {
      color: appstyles.fontColorInactive,
      fontSize: 20
  }
})

export default MatchesScreen;