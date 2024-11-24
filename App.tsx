import AppI18n from '@/core/i18n/app-i18n';
import AppNavigator from '@/core/navigation/app-navigator';
import AppFetch from '@/core/fetch/app-fetch';

export default function App() {
  return (
    <AppI18n>
      <AppFetch>
        <AppNavigator />
      </AppFetch>
    </AppI18n>
  );
}
