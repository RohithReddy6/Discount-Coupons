import { Stack } from 'expo-router';
import { View } from 'react-native';
import CouponSummary from '~/components/CouponSummary';
import CouponItem from '~/components/CouponItem';

export default function Coupons() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Coupons',
          headerStyle: { backgroundColor: '#2D2D32' },
          headerTitleStyle: { color: '#FFFFFF' },
        }}
      />
      <View className="flex-1 bg-[#141414] px-6 py-6">
        <CouponSummary />
        <CouponItem />
      </View>
    </>
  );
}