import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description }) => {
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
        <ResturantCard
  id={13}
  imgUrl="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  title="Breakfast"
  rating={4.5}
  genre=""
  address=""
  short_description="Get the best deals in the morning."
  dishes={[
    { name: "Spanish Omellete", price: 400,id: "1",description:"Fried egg, with onions,green peppers and tomatoes.",
     image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { name: "Egg of choice on toast", price: 170,id: "2",description:"Egg as you like them;fried or boiled with toast.", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]}
  long={10}
  lat={0}
/>

<ResturantCard id={15} imgUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Drinks" rating={5.0} genre="" address="" 
         short_description="Bon Appite" dishes={[
    { name: "Expresso", price: 100,id: "11",description:"Best in the world",
     image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { name: "Americano", price: 70,id: "12",description:"Truly american", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />
<ResturantCard id={16} imgUrl="https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Mains" rating={1.5} genre="" address="" 
         short_description="Description" dishes={[
    { name: "Beef Burger", price: 400,id: "13",description:"Best in the world",
     image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { name: "Fish Fingers", price: 550,id: "14",description:"Fishing", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]} long={10} lat={0} />
  <ResturantCard id={16} imgUrl="https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
         title="Fasf Foods" rating={1.5} genre="" address="" 
         short_description="Get any pizza any time" dishes={[
    { name: "Veg Supreme", price: 500,id: "13",description:"Vegies",
     image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { name: "Peperoni", price: 750,id: "14",description:"Beef Salami", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D" }
  ]} long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})