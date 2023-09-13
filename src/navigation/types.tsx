/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */

export type MainRootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Signup: undefined;
};

export type RootStackParamList = MainRootStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
