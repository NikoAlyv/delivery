import { useFonts } from 'expo-font';

export const useTypography = () => {
  const [fontsLoaded] = useFonts({
    firaCode: require('../assets/fonts/FiraCode-Medium.ttf'),
    inter: require('../assets/fonts/Inter_18pt-Regular.ttf'),
    montserrat: require('../assets/fonts/Montserrat-Bold.ttf'),
    playFair: require('../assets/fonts/PlayfairDisplay-Medium.ttf'),
    poppins: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  return fontsLoaded;
};
