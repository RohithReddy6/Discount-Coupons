import CouponSummary from '~/components/CouponSummary';
import { calculateSummary } from '~/utils/couponUtils';

export interface Coupon {
  id: string;
  month: string;
  couponName: string;
  date: string;
  status: 'Active' | 'Expired';
}

export interface RawCoupon {
  code: string;
  type: string;
  value: number;
  expire_at: string;
  is_active: boolean;
  max_use: number;
  used: number;
  max_apply_date: string | null;
}

export interface CouponSummary {
  totalCoupons: number;
  availableCoupons: number;
  progress: number;
}

export interface CouponState {
  data: Coupon[];
  summary: ReturnType<typeof calculateSummary> | null;
  isLoading: boolean;
  error: string | null;
}

export interface UseCouponsData {
  coupons: Coupon[];
  summary: ReturnType<typeof calculateSummary> | null;
  loading: boolean;
  error: string | null;
}

const couponsTypes = {
  Coupon: {} as Coupon,
  RawCoupon: {} as RawCoupon,
  CouponSummary: {} as CouponSummary,
  CouponState: {} as CouponState,
  UseCouponsData: {} as UseCouponsData,
};

export default couponsTypes;