import React from 'react';
import { View, Text } from 'react-native';

interface CouponStatusBadgeProps {
  status: string;
}

const CouponStatusBadge: React.FC<CouponStatusBadgeProps> = ({ status }) => {
  const statusColor = status === 'Active' ? 'bg-[#CDDC01]' : 'bg-pink-500';

  return (
    <View className="flex-row items-center rounded-full border border-[#4B5563] px-2 py-1">
      <View className={`mr-2 h-4 w-4 rounded-full ${statusColor}`} />
      <Text className="text-white">{status}</Text>
    </View>
  );
};

export default CouponStatusBadge;