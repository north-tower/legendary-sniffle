import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow2 = ({id, title, description }) => {
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
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1601313054536-4ffa26587696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Breakfast" rating={4.5} genre="" address="" 
         short_description="Description" dishes={[
    { name: "Spanish Omellete", price: 400,id: "1",description:"Fried egg, with onions,green peppers and tomatoes.",
     image: "https://images.unsplash.com/photo-1690896255756-6aaefe25d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYW5pc2glMjBvbWVsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
    { name: "Egg of choice on toast", price: 170,id: "2",description:"Egg as you like them;fried or boiled with toast.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Pancake", price: 120,id: "2",description:"Hot flat cake.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Sweet French Toast", price: 200,id: "2",description:"An aromatic mixture of eggs,cinnamon and bread.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]}
         long={10} lat={0} />
         <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         title="Quick Bites" rating={3.0} genre="" address="Main Str" 
         short_description="Description" dishes={[
    { name: "Black Forest Cake", price: 200,id: "1",description:"Savour the taste.",
     image: "https://images.unsplash.com/photo-1690896255756-6aaefe25d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYW5pc2glMjBvbWVsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
    { name: "Bhajias", price: 200,id: "2",description:"Finger Licking.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Queen Cake", price: 120,id: "2",description:"Hot flat cake.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Beef Kebab", price: 150,id: "2",description:"Beefy.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Drinks" rating={5.0} genre="" address="Main Str" 
         short_description="Description" dishes={[
    { name: "Tornado Twist", price: 400,id: "1",description:"Twisty.",
     image: "https://images.unsplash.com/photo-1690896255756-6aaefe25d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYW5pc2glMjBvbWVsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
    { name: "Pinacola", price: 400,id: "2",description:"Pineapple.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Iced Mocha", price: 240,id: "2",description:"Icy.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Green Tea", price: 120,id: "2",description:"Tea.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1523798724321-364e1951df59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2ZjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Mains" rating={1.5} genre="American" address="Main Str" 
         short_description="Description" dishes={[
    { name: "Beef Burger", price: 400,id: "1",description:"Beefy.",
     image: "https://images.unsplash.com/photo-1690896255756-6aaefe25d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYW5pc2glMjBvbWVsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
    { name: "Cheese Burgers", price: 450,id: "2",description:"Pineapple.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Whole Masala Fish", price: 550,id: "2",description:"Icy.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ,{ name: "Chicken Curry", price: 120,id: "2",description:"Tea.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow2

const styles = StyleSheet.create({})