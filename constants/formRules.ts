import { RegisterOptions } from 'react-hook-form';
import { Regex } from './regexs';

export class FormRules {
  public static fullName = {
    required: {
      message: 'İstifadəçi adı tələb olunur',
      value: true,
    },
    pattern: {
      value: Regex.fullName,
      message: 'İstifadəçi adı 3-16 simvoldan ibarət olmalıdır',
    },
  } as RegisterOptions;

  public static phone = {
    required: {
      message: 'Telefon tələb olunur',
      value: true,
    },
    pattern: {
      value: Regex.phone,
      message: 'Telefon nömrəsi uyğun deyil',
    },
  } as RegisterOptions;

  public static password = {
    required: {
      value: true,
      message: 'Parol tələb olunur',
    },
    validate: {
      minLength: (v: string) =>
        v.length >= 8 || 'Minimum 8 simvol tələb olunur',
      maxLength: (v: string) =>
        v.length <= 16 || 'Maksimum 16 simvol icazə verilir',
    },
  } as RegisterOptions;
}
