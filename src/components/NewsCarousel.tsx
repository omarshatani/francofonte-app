import * as React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

type CarouselItem = {
  id: string
  title: string
  description: string
  imageUrl: string
}

export default function Carousel(props: any) {
  const { data } = props
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => <CarouselItem item={item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const CarouselItem = (item: any | CarouselItem) => {
  const navigation = useNavigation()
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackground()}
      onPress={() =>
        navigation.navigate('MyModal', {
          title: item.item.title,
          description: item.item.description,
          imageUrl: item.item.imageUrl,
        })
      }
    >
      <View style={{ ...styles.itemContainer, ...styles.shadow }}>
        <ImageBackground
          source={require('../../assets/Images/francofonte.jpg')}
          style={{ ...styles.imageContainer }}
          imageStyle={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            {item.item.title}
          </Text>
          <Text
            style={{ fontFamily: 'Montserrat', marginTop: 3, fontSize: 12 }}
          >
            {item.item.description}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    width: 250,
    height: 200,
    // borderColor: "black",
    // borderWidth: 1,
    marginVertical: 10,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imageContainer: {
    height: '65%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  infoContainer: {
    height: '35%',
    width: '100%',
    padding: 10,
  },
})
