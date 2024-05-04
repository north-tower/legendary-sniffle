import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from "tailwind-react-native-classnames"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline"
import FeaturedRow from '../components/FeaturedRow';
import { AdjustmentsHorizontalIcon } from 'react-native-heroicons/solid';
import  { MagnifyingGlassCircleIcon } from 'react-native-heroicons/outline';
import {CameraIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRow2 from '../components/FeaturedRow2'
import FeaturedRow3 from '../components/FeaturedRow3';


const HomeScreen = () => {
    const navigation = useNavigation();
    const [ featuredCategories, setFeaturedCategories ] = useState([]);
    const [data, setData] = useState(null);

//   useEffect(() => {
//     client.fetch(`*[_type == "featured"]`).then((result) => {
//       setData(result);
//     });
//   }, []);

//   console.log(data);

    // useEffect(() => {
    //     fetch(
    //       'https://mkgghndz.api.sanity.io/v2021-10-21/data/query/production?query=%20*%5B_type%20%3D%3D%20%22featured%22%5D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resturants%5B%5D-%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dishes%5B%5D-%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D'
    //     ).then((response) => {
    //     //   console.log('Response:', response)
    //       return response.json()
    //     }).then((data) => { 
    //       setFeaturedCategories(data)
    //     }).catch((error) => {
    //       console.log('Error:', error)
    //     })
    //   }, []);


    //   console.log(featuredCategories)
      


    
  return (
    <SafeAreaView style={tw`bg-black h-full pt-5`}>
     <View style={tw`flex-row pb-3 items-center mx-4  `}>
        <Image 
        source={{
            uri: "https://i.postimg.cc/GTbbvMLn/Restaurant-HD-Logo-1-1280x687-1.png"
        }}
        style={tw`h-7 w-7 bg-gray-500 p-4 rounded-full`}
        />
        <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-red-500 text-xs`}>
                Deliver Now!
            </Text>
            <Text style={tw`font-bold text-red-500 text-xl`}>Current Location
                <ChevronDownIcon  color="#FF5733" />
            </Text>
        </View>
        <UserIcon  color="#FF5733" />
     </View>
        <View style={tw`flex-row items-center pb-2 mx-4`}>
            <View style={tw`flex-row flex-1 bg-gray-200 p-3 rounded-full `}>
                <MagnifyingGlassCircleIcon color="gray"  />
                <TextInput placeholder='Resturants and Cuisines' />
            </View>

            <AdjustmentsHorizontalIcon color="#FF5733" />
        </View>

        <ScrollView style={tw`bg-black`} contentContainerStyle={{ paddingBottom: 100,}}>
            <Categories />

            {/* {featuredCategories?.map(category => {
                <FeaturedRow key={category._id} id={category._id} 
                title={category.name} description={category.short_description}
                />
            })} */}

            <FeaturedRow title="Deal of the Day" description="Get the Latest"
            id="1" />

            
            <FeaturedRow2 title="Cafe" 
            description="For decades, we have remained the quintessential cafeteria-style eatery, a beloved meeting point for Nakuru’s residents. Join your friends for a quick chai and a chat, as our restaurant buzzes with lively activity, perfectly capturing the town’s spirit. Our extensive yet simple menu, prepared with a tasteful touch, and served in generous portions, keeps our loyal customers coming back for more.  Restaurant, a timeless staple in Nakuru."
            id="2" />
            
            <FeaturedRow3 title="Fine Dining"
             description="Why not support local resturants tonight!"
            id="3" />

        </ScrollView>


            
        
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });