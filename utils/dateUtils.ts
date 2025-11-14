import { Coupon } from '~/app/types/coupons';

export const formatCouponDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
  return `${month.toUpperCase()} ${day}`;
};

export const filterCouponsByDays = (coupons: Coupon[], filterDays: number | null): Coupon[] => {
  if (!filterDays) return coupons;

  const today = new Date(
    Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate())
  );

  return coupons.filter((coupon) => {
    const couponDate = new Date(
      Date.UTC(
        new Date(coupon.date).getUTCFullYear(),
        new Date(coupon.date).getUTCMonth(),
        new Date(coupon.date).getUTCDate()
      )
    );
    const diffTime = couponDate.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    return diffDays <= filterDays;
  });
};

export const groupCouponsByMonth = (coupons: Coupon[]) => {
  if (!Array.isArray(coupons) || !coupons.length) {
    return [];
  }

  const monthMap: { [key: string]: Coupon[] } = {};

  coupons.forEach((coupon) => {
    const date = new Date(coupon.date);
    const monthKey = date
      .toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })
      .replace(/^./, (str) => str.toUpperCase());
    if (!monthMap[monthKey]) {
      monthMap[monthKey] = [];
    }
    monthMap[monthKey].push(coupon);
  });

  Object.keys(monthMap).forEach((month) => {
    monthMap[month].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  });

  return Object.entries(monthMap)
    .sort(([monthA], [monthB]) => {
      const dateA = new Date(`01 ${monthA} ${new Date().getUTCFullYear()} UTC`);
      const dateB = new Date(`01 ${monthB} ${new Date().getUTCFullYear()} UTC`);
      return dateA.getTime() - dateB.getTime();
    })
    .map(([month, coupons]) => ({
      month,
      coupons,
    }));
};

export const formatDateToMonth = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date
    .toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })
    .replace(/^./, (str) => str.toUpperCase());
};