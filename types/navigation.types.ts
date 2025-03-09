import { Routes } from '../routes/routes';

interface IData {
  distance?: string | null;
  price?: string | null;
}

export type NavigationParamList = {
  [Routes.home]: undefined;
  [Routes.login]: undefined;
  [Routes.register]: undefined;
  [Routes.welcome]: undefined;
  [Routes.chat]: { item: IData };
};
