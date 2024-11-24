import AppI18n from '@/core/i18n/app-i18n';
import AppNavigator from '@/core/navigation/app-navigator';

export default function App() {
  return (
    <AppI18n>
      <AppNavigator />
    </AppI18n>
  );
}
