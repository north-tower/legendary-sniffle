import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const ResturantCard = ({
       id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,
}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => {
        navigation.navigate("Resturant", {id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,

        });
    }}
     style={tw`bg-black mr-3 shadow-lg`}>
           <Image source={{ uri: imgUrl, }} style={tw`h-36 w-64 rounded-sm`} />
            <View style={tw`px-3 pb-4`}>
                 <Text style={tw`font-bold text-red-500 text-lg pt-2`}>
                     {title}
                 </Text>
                 <View style={tw`flex-row items-center p-1 `}>
                     <StarIcon color="#FF5733" opacity={0.5} size={22} />
                     <Text style={tw`text-xs text-gray-500`}>
                         <Text style={tw`text-red-500`}>
                         {rating}</Text> {genre}  </Text>
                 </View>
    
                 
             </View>
    
    
         </TouchableOpacity>
  )
}

export default ResturantCard

const styles = StyleSheet.create({})
