import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { Button } from '@/components/Button';
import { useUserStoreActions } from '@/store/user';
import { windowHeight, windowWidth } from '@/theme/consts.styles';
import BottomSheet, { BottomSheetRefProps } from '@/components/BottomSheet';
import { Table } from '@/components/Table';
import { normalize } from '@/theme/metrics';
import { colors } from '@/theme/colors';
import { SvgImage } from '@/components/SvgImage';
import { useToast } from '@/store/toast';
import { Modal } from '@/components/Modal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParamList } from '@/types/navigation.types';
import { Routes } from '@/routes/routes';

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.home>
> = ({ navigation }) => {
  const { logout } = useUserStoreActions();
  const ref = useRef<BottomSheetRefProps>(null);
  const isActive = ref?.current?.isActive();
  const [userLocation, setUserLocation] =
    useState<Location.LocationObject | null>(null);
  const [distance, setDistance] = useState<string | null>('0');
  const [price, setPrice] = useState<string | null>('0');
  const [menuIcon, setMenuIcon] = useState<boolean>(false);
  const closeScreen = () => setMenuIcon(false);
  const showToast = useToast();
  const MAPS_APIKEY: any = process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY;
  const courierLocation = {
    latitude: 40.4616,
    longitude: 49.7264,
  };

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        showToast('error', 'Məkan icazəsi rədd edildi');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    }

    getCurrentLocation();
    ref?.current?.scrollTo(-windowHeight / 3);

    // const isActive = ref?.current?.isActive();
    // if (isActive) {
    //   ref?.current?.scrollTo(0);
    // } else {
    //   ref?.current?.scrollTo(-200);
    // }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: courierLocation.latitude,
          longitude: courierLocation.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={{ width: windowWidth, height: windowHeight }}
        showsUserLocation
      >
        {userLocation && (
          <MapViewDirections
            origin={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
            destination={courierLocation}
            apikey={MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="blue"
            onReady={(result) => {
              const price = result.distance * 2;
              setPrice(price.toFixed(2));
              setDistance(result.distance.toFixed(2));
            }}
          />
        )}
        <Marker coordinate={courierLocation} />
      </MapView>
      <View style={styles.iconContainer}>
        <SvgImage
          source={require('../assets/vectors/menu.svg')}
          onPressOut={() => setMenuIcon(true)}
        />
      </View>
      <BottomSheet ref={ref}>
        <Table
          title="Çatdırılma məsafəsi"
          icon={require('../assets/vectors/distance.svg')}
          subTitle={`${distance} km`}
        />

        <Table
          title="Qiymet"
          icon={require('../assets/vectors/price.svg')}
          subTitle={`${price} azn`}
        />
        <Button
          onPress={() => {
            const data = { price, distance };
            navigation.navigate(Routes.chat, { item: data });
          }}
          style={styles.button}
          title="Sifariş verin"
        />
      </BottomSheet>

      {menuIcon ? (
        <Modal
          text="Heasabdan çıxmaq istədiyinizə əminsiniz?"
          onPress={closeScreen}
          logout={logout}
          buttonText="Çıxış"
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255,0,0,0.8)',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    marginHorizontal: normalize('horizontal', 24),
  },

  iconContainer: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 10,
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 90,
    elevation: 5,
  },
});
