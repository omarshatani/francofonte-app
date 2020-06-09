import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import SearchBox from './GlobalSearchBar'
import ServicesList from './ServicesList'
import Carousel from './NewsCarousel'
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List'

interface ServiceItem {
  id: string
  title: string
  iconName: string
  iconPackage: string
  iconSize: number
  colors: Array<string>
}

interface CarouselItem {
  id: string
  title: string
  description: string
  imageUrl: string
}

export const HomeScreen = ({ navigation }: any) => {
  const data: Array<ServiceItem> = [
    {
      id: Math.random().toString(36),
      title: 'Segnalazioni',
      iconName: 'alert-circle-outline',
      iconPackage: 'material-community',
      iconSize: 30,
      colors: ['#F8B683', '#FB9B50'],
    },
    {
      id: Math.random().toString(36),
      title: 'Tributi',
      iconName: 'money-bill-wave-alt',
      iconPackage: 'font-awesome5',
      iconSize: 24,
      colors: ['#7AE9FF', '#0FD2F9'],
    },
    {
      id: Math.random().toString(36),
      title: 'Sociale',
      iconName: 'account-group',
      iconPackage: 'material-community',
      iconSize: 30,
      colors: ['#65e960', '#2ae814'],
    },
    {
      id: Math.random().toString(36),
      title: 'Ufficio tecnico',
      iconName: 'wrench',
      iconPackage: 'material-community',
      iconSize: 30,
      colors: ['#dc60e9', '#ba14e8'],
    },
    {
      id: Math.random().toString(36),
      title: 'Comune',
      iconName: 'office-building',
      iconPackage: 'material-community',
      iconSize: 30,
      colors: ['#F88383', '#FB5050'],
    },
    {
      id: Math.random().toString(36),
      title: 'Polizia Municipale',
      iconName: 'building',
      iconPackage: 'font-awesome5',
      iconSize: 30,
      colors: ['#F88383', '#FB5050'],
    },
    {
      id: Math.random().toString(36),
      title: 'Ragioneria',
      iconName: 'calculator-variant',
      iconPackage: 'material-community',
      iconSize: 30,
      colors: ['#F88383', '#FB5050'],
    },
    {
      id: Math.random().toString(36),
      title: 'Informazioni',
      iconName: 'information-variant',
      iconPackage: 'material-community',
      iconSize: 30,
      colors: ['#F88383', '#FB5050'],
    },
    {
      id: Math.random().toString(36),
      title: 'Protezione civile',
      iconName: 'shield',
      iconPackage: 'material-community',
      iconSize: 30,
      colors: ['#F88383', '#FB5050'],
    },
  ]
  const carouselData: Array<CarouselItem> = [
    {
      id: Math.random().toString(36),
      title: 'Titolo Carousel 1',
      description: 'Lorem Ipsum Sit Amet Dolor',
      imageUrl: '../../assets/Images/francofonte.jpg',
    },
    {
      id: Math.random().toString(36),
      title: 'Titolo Carousel 2',
      description: 'Lorem Ipsum Sit Amet Dolor',
      imageUrl: '../../assets/Images/francofonte.jpg',
    },
    {
      id: Math.random().toString(36),
      title: 'Titolo Carousel 3',
      description: 'Lorem Ipsum Sit Amet Dolor',
      imageUrl: '../../assets/Images/francofonte.jpg',
    },
    {
      id: Math.random().toString(36),
      title: 'Titolo Carousel 4',
      description: 'Lorem Ipsum Sit Amet Dolor',
      imageUrl: '../../assets/Images/francofonte.jpg',
    },
    {
      id: Math.random().toString(36),
      title: 'Titolo Carousel 5',
      description: 'Lorem Ipsum Sit Amet Dolor',
      imageUrl: '../../assets/Images/francofonte.jpg',
    },
  ]

  return (
    <LinearGradient
      colors={['#ed7d31', '#fec000']}
      start={[1, 0.2]}
      style={{ position: 'relative' }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.cityName}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontFamily: 'Montserrat-SemiBold',
              }}
            >
              Comune di
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: '#fff',
                fontFamily: 'Montserrat-SemiBold',
              }}
            >
              Francofonte
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBoxContainer}>
              <SearchBox />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 15 }}>
                Servizi
              </Text>
              <ServicesList data={data} />
            </View>
            <View>
              <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 15 }}>
                Popolari
              </Text>
              <Carousel data={carouselData} />
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  )
}

export const NewsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>News</Text>
      </View>
    </SafeAreaView>
  )
}

export const ModalNewsDetailsScreen = (props: any) => {
  const { description } = props.route.params
  const { title } = props.route.params
  const { imageUrl } = props.route.params //da inserire al posto della source
  //console.log(props.route.params.imageUrl)
  let uri = props.route.params.imageUrl
    ? require('../../assets/Images/francofonte.jpg')
    : require('../../assets/Images/francofonte.jpg')

  return (
    <SafeAreaView style={styles.safeAreaViewModal}>
      <ScrollView style={styles.container}>
        <View style={{ ...styles.imageContainer }}>
          <Image source={uri} style={styles.image} />
        </View>
        <View>
          <View style={{ ...styles.paragrContainerModal }}>
            <Text style={styles.fontTitle}>{title}</Text>
            <Text style={styles.fontDescription}>{description}</Text>
          </View>
          <View>
            <View style={styles.scrollViewModal}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  fontTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  fontDescription: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  safeAreaViewModal: {
    marginTop: 0,
    paddingTop: 0,
    flex: 1,
  },
  scrollViewModal: {
    marginHorizontal: 20,
    height: 250,
  },

  paragrContainerModal: {
    margin: 20,
    paddingTop: 0,
  },
  imageContainer: {
    flex: 1,
    height: 300,
    width: '100%',
  },
  header: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '30%',
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  main: {
    height: '70%',
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    // position: "absolute",
    // top: "25%",
    // zIndex: 999,
    width: '100%',
    marginTop: -70,
    marginBottom: 20,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  searchBoxContainer: {
    width: '80%',
  },
})
