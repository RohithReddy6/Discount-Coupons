import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import useCoupons from '~/app/hooks/useCoupons';
import TimeFilter from './filter/TimeFilter';
import CouponMonthSection from './coupon/CouponMonthSection';
import EmptyState from './common/EmptyState';
import ErrorState from './common/ErrorState';
import LoadingState from './common/LoadingState';
import { filterCouponsByDays, groupCouponsByMonth } from '~/utils/dateUtils';

const CouponItem: React.FC = () => {
  const [filterDays, setFilterDays] = useState<number | null>(null);
  const { coupons, loading, error } = useCoupons();

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const filteredCoupons = filterCouponsByDays(coupons, filterDays);
  const groupedCoupons = groupCouponsByMonth(filteredCoupons);

  return (
    <View className="flex-1">
      <TimeFilter onFilterChange={setFilterDays} />
      <FlatList
        data={groupedCoupons}
        keyExtractor={(item) => item.month}
        renderItem={({ item }) => <CouponMonthSection monthData={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyState message="No coupons found" />}
      />
    </View>
  );
};

export default CouponItem;