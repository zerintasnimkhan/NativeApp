import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Title, Paragraph, Button, Text, overlay } from 'react-native-paper';
import Separator from '../components/separator';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: 'https://www.araba.ae/cdn/shop/files/2_ae55ee80-e23a-43a0-9546-d0afa3f0ac52.webp?v=1707835755' }}
          style={styles.image}
        />
      <View style={styles.overlay}>
      <View style={styles.iconContainer}>
      <Image
        source={require('../database/icons/left.png')} 
        style={styles.upperIcons}
      />
      </View>
      <View style={styles.iconContainer}>
      <Image
        source={require('../database/icons/love.png')} 
        style={styles.upperIcons}
      />
        </View>
      </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Beats Studio Pro Headphones</Text>
        <View style={styles.ratingContainer}>
  
    <TouchableOpacity style={styles.chipContainer}>
      <Image
        source={require('../database/icons/star.png')} 
        style={styles.icon}
      />
      <Text style={styles.text}>4.9</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.chipContainer}>
      <Image
        source={require('../database/icons/like.png')} 
        style={styles.icon}
      />
      <Text style={styles.text}>88%</Text>
    </TouchableOpacity>
        
          
        </View>
        <Text style={styles.paragraph}>
          Beats Studio Pro Wireless is a premium Bluetooth overhead headphone. The gadget sounds great and effectively suppresses noise.
        </Text>
        <View style={{flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'}}>
        <Text style={styles.specifications}>Specifications</Text>
        <Image
                source={require('../database/icons/next.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
          </View>
        <Separator/>
        <View style={{flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'}}>
        <Text style={styles.reviews}>172 reviews</Text>
        <Image
                source={require('../database/icons/next.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              </View>
        <Separator/>
        <View style={styles.flexButton}>
          <View>
        <Text style={styles.price}>$65.90</Text>
        <Text style={styles.delivery}>2-5 days</Text>
        </View>
        <Button
          mode="contained"
          style={styles.addButton}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
        >
          Add to cart
        </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: "#F6F5F4",
    marginRight: 8

  },
  // overlay: {
  //   position: 'absolute',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'baseline',
  //   marginTop: 16
  // },
    overlay: {
      position: 'absolute',
      top: 16,  
      left: 0,  
      right: 0, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16, 
    },
    iconContainer: {
      width: 50, // Circle size
      height: 50, // Circle size
      borderRadius: 30, // Makes the container a circle
      backgroundColor: '#FFFFFF', // White background
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position
      shadowOpacity: 0.2, // Shadow transparency
      shadowRadius: 2, // Shadow blur
      elevation: 4, // Elevation for Android
    },
  icon: {
    width: 14,
    height: 16,
    marginRight: 6,
  },
  upperIcons: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendation: {
    marginLeft: 8,
  },
  specifications: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#424242"
  },
  price: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#424242"
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 480,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#f6f5f4'
  },
  contentContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#424242"
  },
  // ratingContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 10,
  // },
  rating: {
    fontSize: 16,
    marginHorizontal: 4,
  },
  // recommendation: {
  //   fontSize: 14,
  //   color: 'gray',
  // },
  paragraph: {
    marginBottom: 10,
    marginTop: 14,
    fontSize: 15,
    color: '#424242',
    lineHeight: 19,
    fontFamily: 'sans-serif',
    fontWeight: '600'
  },
  // specifications: {
  //   fontWeight: 'bold',
  //   marginBottom: 4,
  // },
  reviews: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#424242"
  },
  // price: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#3C6EEF',
  //   marginBottom: 10,
  // },
  delivery: {
    marginBottom: 10,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#3C6EEF',
    width: 280,
    height: 50,
    borderRadius: 10,
    paddingTop: 6,
    fontSize: 30
  },
  buttonContent: {
    height: 50,
    justifyContent: 'center', 
  },
  buttonText: {
    fontSize: 16, 
    paddingBottom: 8,
  },
  flexButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default DetailsScreen;
