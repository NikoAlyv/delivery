import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { InputControlled } from '@/components/InputControlled';
import { useForm } from 'react-hook-form';
import { FormRules } from '@/constants/formRules';
import { colors } from '@/theme/colors';
import { Button } from '@/components/Button';
import { TextLink } from '@/components/TextLinks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParamList } from '@/types/navigation.types';
import { Routes } from '@/routes/routes';
import { normalize } from '@/theme/metrics';
import { useUserStoreActions } from '@/store/user';
import { useToast } from '@/store/toast';
import { windowHeight } from '@/theme/consts.styles';

export interface IRegister {
  name: string;
  password: string;
  phone: string;
}

export const RegisterScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.register>
> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    defaultValues: {
      name: '',
      phone: '',
      password: '',
    },
  });

  const { initUser } = useUserStoreActions();
  const showToast = useToast();

  const onSubmit = async (data: IRegister) => {
    console.log(data);
    initUser(data);
    setLoading(false);
    showToast('success', 'User Registered');
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.root}
    >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.container}>
        <InputControlled
          control={control}
          errorMessage={errors.name?.message}
          rules={FormRules.fullName}
          label="İstifadəçi adı"
          placeholder="Nihad Aliyev"
          name="name"
          type="user"
        />

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
          title="Hesab yaradın"
          style={styles.button}
          loading={loading}
          onPress={handleSubmit(onSubmit)}
        />
        <TextLink
          content="Sizin hesabınız var? Daxil olun"
          center
          highlighted={[
            {
              text: 'Daxil olun',
              callback: () => navigation.navigate(Routes.login),
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
  button: {
    marginVertical: normalize('vertical', 15),
  },
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: colors.white,
    borderTopLeftRadius: 130,
    paddingHorizontal: normalize('horizontal', 24),
  },
});
