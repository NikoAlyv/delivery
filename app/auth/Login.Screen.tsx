import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParamList } from '@/types/navigation.types';
import { Routes } from '@/routes/routes';
import { InputControlled } from '@/components/InputControlled';
import { useForm } from 'react-hook-form';
import { FormRules } from '@/constants/formRules';
import { normalize } from '@/theme/metrics';
import { SvgImage } from '@/components/SvgImage';
import { colors } from '@/theme/colors';
import { TextLink } from '@/components/TextLinks';
import BottomSheet, { BottomSheetRefProps } from '@/components/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CommonStyles } from '@/theme/common.styles';
import { useUserStoreActions } from '@/store/user';
import { useToast } from '@/store/toast';
import { windowHeight } from '@/theme/consts.styles';
//https://github.com/mbugua70/coke_app_rn
interface ILogin {
  phone: string;
  password: string;
}
export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({ navigation }) => {
  const ref = useRef<BottomSheetRefProps>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ILogin>({
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  const { initUser } = useUserStoreActions();
  const showToast = useToast();

  const onSubmit = async (data: ILogin) => {
    console.log(data);
    setLoading(false);
    showToast('success', 'Login succesfully');
    initUser(data);
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.root}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <InputControlled
          keyboardType="phone-pad"
          control={control}
          errorMessage={errors.phone?.message}
          rules={FormRules.phone}
          label="Telefon nömrəsi"
          name="phone"
          type="text"
          placeholder="070 532 95 07"
        />
        <InputControlled
          control={control}
          placeholder="********"
          name="password"
          label="Şifrə"
          errorMessage={errors.password?.message}
          type="password"
          rules={FormRules.password}
        />

        <Button
          style={styles.button}
          title="Daxil olun"
          onPress={handleSubmit(onSubmit)}
        />
        <TextLink
          content="Hesabınız var?
                    Hesab yaradın"
          center
          highlighted={[
            {
              text: 'Hesab yaradın',
              callback: () => navigation.navigate(Routes.register),
            },
          ]}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    paddingTop: windowHeight / 4,
  },

  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: colors.white,
    borderTopLeftRadius: 130,
    paddingHorizontal: normalize('horizontal', 24),
  },
  button: {
    marginVertical: normalize('vertical', 15),
  },
});
