import {RootStackParamList} from "../src/core/navigation/navigators/root-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
