import { View, Text } from 'react-native';
import useCoupons from '../app/hooks/useCoupons';

const CouponSummary = () => {
  const { summary, loading } = useCoupons();

  if (loading || !summary) {
    return (
      <View className="rounded-lg bg-[#2D282D] p-4">
        <Text className="text-white">Loading...</Text>
      </View>
    );
  }

  const { totalCoupons, availableCoupons, progress } = summary;

  return (
    <View className="rounded-lg bg-[#2D282D] p-4">
      <View className="flex-row">
        <Text className="text-base text-[#A0A0A0]">Total</Text>
      </View>
      <View className="min-h-20 items-center justify-center">
        <Text className="text-3xl font-bold text-white">
          {totalCoupons.toString().padStart(2, '0')}
        </Text>
      </View>
      <View className="mb-3 mt-2 border-t border-[#4B5563]" />
      <View>
        <Text className="mb-2 text-sm text-[#A0A0A0]">Available coupons</Text>
        <View className="flex-row items-center">
          <View className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#4B5563]">
            <View
              className="h-full rounded-full bg-[#CDDC01]"
              style={{ width: `${progress * 100}%` }}
            />
          </View>
          <Text className="ml-2 text-base text-white">
            {availableCoupons.toString().padStart(2, '0')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CouponSummary;