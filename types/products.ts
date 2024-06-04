export interface Product {
  id: number;
  name: string;
  barCode: string;
  description: string;
  sellType: string;
  maxQuantityInCart: number | null;
  price: number;
  previousPrice: number;
  categoryId: number;
  doNotRecordStock: boolean;
  categoryIds: number[] | null;
  parentCategoryName: string;
  categoryName: string;
  subCategoryId: number;
  releaseDate: Date | null;
  storageQuantity: number;
  requestedQuantity: number;
  promotionQuantity: number;
  imageUrl: string;
  shopId: number;
  shopName: string | null;
  images: string[] | null;
  isPurchased: boolean;
  orderNo: number;
  discountPercent: number;
  hasDiscount: boolean;
  discountAmount: number;
  discountType: string | null;
  isFavorite: boolean;
  preSalePrice: number | null;
  onSale: boolean;
  isKyosk: boolean;
  badges: string[] | null;
  badgeIds: number[] | null;
  disableBuyButton: boolean;
  onSaleSoon: boolean;
  h1: string;
  metaDescription: string;
  metaTitle: string;
  metaUrlName: string;
  specificationGroup: string | null;
  mainSpecification: string | null;
  keySpecification: string | null;
  similarProductsList: string[] | null;
  bundles: string[] | null;
  accessories: string[] | null;
  bundleTotalPreviousPrice: number | null;
  isBooked: boolean;
  videoUrls: string[] | null;
  bookingDateTo: Date | null;
  isInCart: boolean;
  bundleIsInCart: boolean;
  bundleRequestedQuantity: number | null;
  isPriceSubscribed: boolean;
  isStockSubscribed: boolean;
  categoryRoute: string | null;
  route: string;
  shareRoute: string | null;
  brandName: string;
  brandPhotoUrl: string | null;
  promotionFinishDate: Date | null;
  isNightPromotion: boolean;
  breadcrumbs: string[] | null;
  gifts: string[] | null;
  giftType: string | null;
  imageAlt: string | null;
  labelText: string | null;
  labelColor: string | null;
  iconUrl: string | null;
  routeIsNotValid: boolean | null;
  subCategoryName: string | null;
}

interface SpecificationValue {
  id: string;
  value: string;
}

export interface Filter {
  name: string;
  values: SpecificationValue[];
}
