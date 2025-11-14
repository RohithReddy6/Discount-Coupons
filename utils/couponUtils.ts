import { Coupon, CouponSummary, RawCoupon } from '~/app/types/coupons';
import { formatDateToMonth } from './dateUtils';

export const formatCoupon = (raw: RawCoupon): Coupon => ({
  id: raw.code,
  month: formatDateToMonth(raw.expire_at),
  couponName: raw.code,
  date: raw.expire_at,
  status: raw.is_active ? 'Active' : 'Expired',
});

export const calculateSummary = (coupons: Coupon[]): CouponSummary => {
  const totalCoupons = coupons.length;
  const availableCoupons = coupons.filter((c) => c.status === 'Active').length;
  const progress = totalCoupons > 0 ? availableCoupons / totalCoupons : 0;

  return { totalCoupons, availableCoupons, progress };
};