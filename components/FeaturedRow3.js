import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow3 = ({id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-red-500 text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon color="#FF5733" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} style={tw`pt-4`} >
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1600147184950-b0a367a98bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtmY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Continental Food" rating={4.5} genre="" address="Main Str" 
         short_description="Enjoy fine tastes from across the country" dishes={[
    { name: "Chicken Maryland", price: 750,id: "1",description:"Twisty.",
     image: "https://images.unsplash.com/photo-1690896255756-6aaefe25d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYW5pc2glMjBvbWVsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
    { name: "Chicken Tikka", price: 750,id: "2",description:"Tikka.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Whole Fish Fried", price: 750,id: "2",description:"Fish.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Chicken Creole", price: 120,id: "2",description:"Tea.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />
         <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
         title="Indian Food" rating={4.0} genre="" address="Main Str" 
         short_description="Description" dishes={[
    { name: "Panner Chicken Masala", price: 700,id: "1",description:"Chicken.",
     image: "https://images.unsplash.com/photo-1690896255756-6aaefe25d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYW5pc2glMjBvbWVsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
    { name: "Navrataan Korma", price: 675,id: "2",description:"Tikka.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Tadka Daal", price: 590,id: "2",description:"Fish.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Paneer Tika", price: 600,id: "2",description:"Tika.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
         title="Chinese Food" rating={5.0} genre="" address="Main Str" 
         short_description="Welcome to China Town" dishes={[
    { name: "Mongoliana Beef | Lamb | Chicken", price: 790,id: "1",description:"Stir Fried Marinated Meat.",
     image: "https://images.unsplash.com/photo-1690896255756-6aaefe25d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYW5pc2glMjBvbWVsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
    { name: "Chilli Chicken", price: 790,id: "2",description:"Spicy Chilli.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Plain Chowmein", price: 400,id: "2",description:"Fish.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Steamed Rice", price: 250,id: "2",description:"Steamed.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />



      </ScrollView>
    </View>
  )
}

export default FeaturedRow3

const styles = StyleSheet.create({})