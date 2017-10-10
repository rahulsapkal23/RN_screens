import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
   TouchableOpacity,
  View
} from 'react-native';

import styles from './../styles/screen2';

export default class screen2 extends Component {


  static navigationOptions = {
    title: 'Privilege Center',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      
                <View style={styles.VWcontainer}>

                    <ScrollView contentContainerStyle={styles.SWcontainer}>
                       <View style={styles.VWcontainer1}>
     
</View>
<View style={styles.VWcontainer2}>
     
</View>
<View style={styles.VWcontainer3}>
     
</View>
<View style={styles.VWcontainer4}>
   <View style={styles.VWcontainer5}>
     <View style={styles.VWcontainer6}>
     
</View> 
</View>  
</View>

<View style={styles.SWcontainer123}>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
<View style={styles.SWcontainer123}>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
                               </ScrollView>
         </View>      
    );
  }
}



