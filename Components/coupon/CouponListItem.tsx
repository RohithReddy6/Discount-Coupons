import React from 'react';
import { View, Text } from 'react-native';
import { Coupon } from '~/app/types/coupons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CouponStatusBadge from './CouponStatusBadge';
import { formatCouponDate } from '../../utils/dateUtils';

interface CouponListItemProps {
  coupon: Coupon;
}

const CouponListItem: React.FC<CouponListItemProps> = ({ coupon }) => {
  return (
    <View className="flex-row items-center justify-between border-b border-gray-700 py-4">
      <View className="flex-row items-center">
        <View className="mr-3 h-8 w-8 items-center justify-center rounded-full bg-gray-600">
          <MaterialIcons name="attach-money" size={20} color="white" />
        </View>
        <View>
          <Text className="text-lg font-bold text-white">{coupon.couponName.toUpperCase()}</Text>
          <Text className="text-sm text-gray-400">{formatCouponDate(coupon.date)}</Text>
        </View>
      </View>
      <CouponStatusBadge status={coupon.status} />
    </View>
  );
};

export default CouponListItem;