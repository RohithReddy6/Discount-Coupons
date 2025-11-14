import { useState, useEffect, useCallback } from 'react';
import { UseCouponsData, CouponState } from '../types/coupons';
import { fetchCouponsFromAPI } from '../../utils/api';
import { API_CONFIG } from '../config/api';
import { calculateSummary, formatCoupon } from '~/utils/couponUtils';

const initialCouponState: CouponState = {
  data: [],
  summary: null,
  isLoading: true,
  error: null,
};

const useCoupons = (): UseCouponsData => {
  const [coupon, setCoupon] = useState<CouponState>(initialCouponState);

  const fetchCoupons = useCallback(async () => {
    setCoupon((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const endpoint = `${API_CONFIG.BASE_URL}${API_CONFIG.COUPON_ENDPOINT}`;
      const response = await fetchCouponsFromAPI(endpoint);

      if (!Array.isArray(response)) {
        throw new Error('Invalid data format received from API');
      }

      const formattedCoupons = response.map(formatCoupon);

      setCoupon({
        data: formattedCoupons,
        summary: calculateSummary(formattedCoupons),
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setCoupon({
        ...initialCouponState,
        isLoading: false,
        error:
          error instanceof Error ? error.message : 'Failed to fetch coupons. Please try again.',
      });
    }
  }, []);

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  return {
    coupons: coupon.data,
    summary: coupon.summary,
    loading: coupon.isLoading,
    error: coupon.error,
  };
};

export default useCoupons;