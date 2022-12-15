import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {enableLatestRenderer, Polyline} from 'react-native-maps';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import polyline from '@mapbox/polyline';
import decodePolyline from 'decode-google-map-polyline';
import GetLocation from 'react-native-get-location';

enableLatestRenderer();
/**
 * 
 * Map : Dùng để load bản đồ lên điện thoại
 * Routes : Làm tính năng liên quan tới dẫn đường.
 * Geocoding : sẽ chuyển đổi từ địa chỉ thành tọa độ
 */
export default function DemoGoogleMap() {

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000
  }).then(location => console.log(location))
  .catch(e => {
    const {code, message } = e
    console.log(`Error ${message}`)
   })

  //Tọa độ địa điểm hiện tại
  //Tọa độ đia điểm đến

  const coordinates = decodePolyline('qtx`AqqfjSx@w@x@p@XV?@A@?B???B?@@B@@@@@@??@@B?@?@?B?@?@A@?VVbEvDzDxDzAeBv@}@zBiC^c@')
  const newCoordinates = []
  for(let data of coordinates){
    newCoordinates.push({latitude: data.lat, longitude: data.lng})
  }
  // console.log(newCoordinates)
  return (
    // <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 10.780987,
         longitude: 106.6984947,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >

       <Marker
        coordinate={{latitude: 10.780987, longitude: 106.6984947}}
       >
       
        <Callout>
            {/* <View style={{flex:1}}> */}
                <Text>
                    <Image resizeMode='cover' style={{width: 150, height: 150}} source={{uri: 'https://aboutreact.com/wp-content/uploads/2018/07/react_native_imageview.png'}} />
                </Text>
                <Text>Hello Callout</Text>
                <Text>Hello Callout</Text>
            {/* </View>    */}
        </Callout>
       </Marker>

       <Polyline coordinates={newCoordinates} strokeColor={'red'} />

     </MapView>
  //  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

//28 Hàng mã, quận từ liêm , hà nội - 42 Trần Duy Hưng......
//Thông qua Geocoding truyền vào địa chỉ bắt đầu và địa chỉ kết thúc
// hãy vẽ dẫn đường trên bản đồ
//Khi call url thông qua API thay thế khoảng trắng thành %20