import React from 'react';
import { View, Text } from 'react-native';
import { Coupon } from '~/app/types/coupons';
import CouponListItem from './CouponListItem';

interface MonthSectionProps {
  monthData: {
    month: string;
    coupons: Coupon[];
  };
}

const CouponMonthSection: React.FC<MonthSectionProps> = ({ monthData }) => {
  const { month, coupons } = monthData;

  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm text-gray-400">{month}</Text>
      {coupons.map((coupon) => (
        <CouponListItem key={coupon.id} coupon={coupon} />
      ))}
    </View>
  );
};

export default CouponMonthSection;