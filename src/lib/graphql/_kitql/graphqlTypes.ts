import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Json: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddToCartInput = {
  attributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  cartId: Scalars['ID'];
  currency?: InputMaybe<CurrencyInput>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  quantity?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<CartItemType>;
};

/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export type Address = {
  __typename?: 'Address';
  /** Use this to keep the city/town name. */
  city: Scalars['String'];
  /** Use this to keep an optional company name for addresses. */
  company?: Maybe<Scalars['String']>;
  /** Use this to keep the country name. */
  country: Scalars['String'];
  /** Use this to keep the first line of the address. */
  line1: Scalars['String'];
  /** Use this to keep the apartment, door number, etc. */
  line2?: Maybe<Scalars['String']>;
  /** Use this to keep the name of the recipient. */
  name: Scalars['String'];
  /** Use this to keep the post/postal/zip code. */
  postalCode: Scalars['String'];
  /** Use this to keep the state/county name. */
  state?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city: Scalars['String'];
  company?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  line1: Scalars['String'];
  line2?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postalCode: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** Carts are the core concept of CartQL. Bring your own PIM and use CartQL to calculate your Cart and Checkout. */
export type Cart = Node & {
  __typename?: 'Cart';
  /** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
  abandoned?: Maybe<Scalars['Boolean']>;
  /** Custom key/value attributes array for the cart. */
  attributes: Array<CustomCartAttribute>;
  /** The date and time the cart was created. */
  createdAt: Scalars['Date'];
  /** The current currency details of the cart. */
  currency: Currency;
  /** The customer for the cart */
  email?: Maybe<Scalars['String']>;
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: Money;
  /** A custom unique identifer for the cart provided by you. */
  id: Scalars['ID'];
  /** A simple helper method to check if the cart is empty. */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /** The items currently in the cart. */
  items: Array<CartItem>;
  /** Custom meta object for the cart */
  metadata?: Maybe<Scalars['Json']>;
  /** Any notes related to the cart/checkout */
  notes?: Maybe<Scalars['String']>;
  /** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: Money;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: Money;
  /** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: Money;
  /** The number of total items in the cart */
  totalItems?: Maybe<Scalars['Int']>;
  /** The number of total unique items in the cart. */
  totalUniqueItems?: Maybe<Scalars['Int']>;
  /** The date and time the cart was updated. */
  updatedAt: Scalars['Date'];
};

/** A Cart Item is used to store data on the items inside the Cart. There are no strict rules about what you use the named fields for. */
export type CartItem = {
  __typename?: 'CartItem';
  /** Custom key/value attributes array for the item. */
  attributes: Array<CustomCartAttribute>;
  /** The date and time the item was created. */
  createdAt: Scalars['Date'];
  /** Description for the item. */
  description?: Maybe<Scalars['String']>;
  /** A custom unique identifer for the item provided by you. */
  id: Scalars['ID'];
  /** Array of image URLs for the item. */
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Line total (quantity * unit price). */
  lineTotal: Money;
  /** Custom metadata for the item. */
  metadata?: Maybe<Scalars['Json']>;
  /** Name for the item. */
  name?: Maybe<Scalars['String']>;
  /** Quantity for the item. */
  quantity: Scalars['Int'];
  /** The type of cart item this is. */
  type: CartItemType;
  /** Unit total for the individual item. */
  unitTotal: Money;
  /** The date and time the item was updated. */
  updatedAt: Scalars['Date'];
};

/** Use these enums to group cart items. Cart totals will reflect these enums. */
export enum CartItemType {
  Shipping = 'SHIPPING',
  Sku = 'SKU',
  Tax = 'TAX'
}

export type CheckoutInput = {
  billing?: InputMaybe<AddressInput>;
  cartId: Scalars['ID'];
  email: Scalars['String'];
  metadata?: InputMaybe<Scalars['Json']>;
  notes?: InputMaybe<Scalars['String']>;
  shipping: AddressInput;
};

/** Cart and Cart Items use the currency object to format their unit/line totals. */
export type Currency = {
  __typename?: 'Currency';
  /** The currency code, e.g. USD, GBP, EUR */
  code?: Maybe<CurrencyCode>;
  /** The decimal places for the currency */
  decimalDigits?: Maybe<Scalars['Int']>;
  /** The decimal separator, e.g. '.' */
  decimalSeparator?: Maybe<Scalars['String']>;
  /** The currency smybol, e.g. $, £, € */
  symbol?: Maybe<Scalars['String']>;
  /** The thousand separator, e.g. ',', '.' */
  thousandsSeparator?: Maybe<Scalars['String']>;
};

export enum CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btc = 'BTC',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mtl = 'MTL',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdd = 'SDD',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Std = 'STD',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Tvd = 'TVD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Veb = 'VEB',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Won = 'WON',
  Wst = 'WST',
  Xaf = 'XAF',
  Xbt = 'XBT',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW'
}

export type CurrencyInput = {
  code?: InputMaybe<CurrencyCode>;
  decimalDigits?: InputMaybe<Scalars['Int']>;
  decimalSeparator?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  thousandsSeparator?: InputMaybe<Scalars['String']>;
};

export type CustomAttribute = {
  __typename?: 'CustomAttribute';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CustomAttributeInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export type CustomCartAttribute = {
  __typename?: 'CustomCartAttribute';
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type DeleteCartInput = {
  /** The ID of the Cart you wish to delete. */
  id: Scalars['ID'];
};

export type DeletePayload = {
  __typename?: 'DeletePayload';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type EmptyCartInput = {
  /** The ID of the Cart you wish to empty. */
  id: Scalars['ID'];
};

/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export type Money = {
  __typename?: 'Money';
  /** The raw amount in cents/pence */
  amount?: Maybe<Scalars['Int']>;
  /** The current currency details of the money amount */
  currency: Currency;
  /** The formatted amount with the cart currency. */
  formatted: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
  addItem: Cart;
  /** Use this to convert a cart to an unpaid order. */
  checkout?: Maybe<Order>;
  /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  decrementItemQuantity: Cart;
  /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
  deleteCart: DeletePayload;
  /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
  emptyCart: Cart;
  /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  incrementItemQuantity: Cart;
  /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
  removeItem: Cart;
  /** Use this to set all the items at once in the cart. This will override any existing items. */
  setItems: Cart;
  /** Use this to update the cart currency or metadata. If the cart doesn't exist, it'll throw an error. */
  updateCart: Cart;
  /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
  updateItem: Cart;
};


export type MutationAddItemArgs = {
  input: AddToCartInput;
};


export type MutationCheckoutArgs = {
  input: CheckoutInput;
};


export type MutationDecrementItemQuantityArgs = {
  input: UpdateItemQuantityInput;
};


export type MutationDeleteCartArgs = {
  input: DeleteCartInput;
};


export type MutationEmptyCartArgs = {
  input: EmptyCartInput;
};


export type MutationIncrementItemQuantityArgs = {
  input: UpdateItemQuantityInput;
};


export type MutationRemoveItemArgs = {
  input: RemoveCartItemInput;
};


export type MutationSetItemsArgs = {
  input: SetCartItemsInput;
};


export type MutationUpdateCartArgs = {
  input: UpdateCartInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateCartItemInput;
};

export type Node = {
  id: Scalars['ID'];
};

/** Orders are immutable. Once created, you can't change them. The status will automatically reflect the current payment status. */
export type Order = {
  __typename?: 'Order';
  /** The custom attributes set at checkout */
  attributes: Array<CustomAttribute>;
  /** The orders billing address. */
  billing: Address;
  /** The ID of the cart you want to "checkout". */
  cartId: Scalars['ID'];
  /** The date and time the order was created. */
  createdAt: Scalars['Date'];
  /** The email of the recipient. Can be used later for cart recovery emails. */
  email: Scalars['String'];
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: Money;
  id: Scalars['ID'];
  /** The order items that were in the cart. */
  items: Array<OrderItem>;
  /** The metadata set at checkout */
  metadata?: Maybe<Scalars['Json']>;
  /** The notes set at checkout. */
  notes?: Maybe<Scalars['String']>;
  /** The orders shipping address. */
  shipping: Address;
  /** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: Money;
  /** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
  status: OrderStatus;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: Money;
  /** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: Money;
  /** The total item count. */
  totalItems: Scalars['Int'];
  /** The total unique item count. */
  totalUniqueItems: Scalars['Int'];
  /** The date and time the order status was updated. */
  updatedAt: Scalars['Date'];
};

/**
 * Orders contain items that were converted from the Cart at 'checkout'.
 *
 * Order items are identical to the CartItem type.
 */
export type OrderItem = {
  __typename?: 'OrderItem';
  attributes: Array<CustomCartAttribute>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  lineTotal: Money;
  metadata?: Maybe<Scalars['Json']>;
  name?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  type: CartItemType;
  unitTotal: Money;
  updatedAt: Scalars['Date'];
};

export enum OrderStatus {
  Paid = 'PAID',
  Unpaid = 'UNPAID'
}

export type Query = {
  __typename?: 'Query';
  /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
  cart?: Maybe<Cart>;
  node?: Maybe<Node>;
};


export type QueryCartArgs = {
  currency?: InputMaybe<CurrencyInput>;
  id: Scalars['ID'];
};


export type QueryNodeArgs = {
  currency?: InputMaybe<CurrencyInput>;
  id: Scalars['ID'];
};

export type RemoveCartItemInput = {
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to remove. */
  id: Scalars['ID'];
};

export type SetCartItemInput = {
  attributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  currency?: InputMaybe<CurrencyInput>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  quantity?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<CartItemType>;
};

export type SetCartItemsInput = {
  cartId: Scalars['ID'];
  items: Array<SetCartItemInput>;
};

export type UpdateCartInput = {
  attributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  currency?: InputMaybe<CurrencyInput>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: InputMaybe<Scalars['Json']>;
  notes?: InputMaybe<Scalars['String']>;
};

export type UpdateCartItemInput = {
  cartId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadata?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<CartItemType>;
};

export type UpdateItemQuantityInput = {
  /** The amount (as Int) you wish to increment the Cart item quantity by. */
  by: Scalars['Int'];
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to update. */
  id: Scalars['ID'];
};

export type AddToCartMutationVariables = Exact<{
  input: AddToCartInput;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addItem: { __typename?: 'Cart', id: string, totalItems?: number | null, totalUniqueItems?: number | null, subTotal: { __typename?: 'Money', formatted: string }, items: Array<{ __typename?: 'CartItem', id: string, name?: string | null, images?: Array<string | null> | null, lineTotal: { __typename?: 'Money', formatted: string }, unitTotal: { __typename?: 'Money', formatted: string } }> } };

export type CartInfoFragment = { __typename?: 'Cart', id: string, totalItems?: number | null, totalUniqueItems?: number | null, subTotal: { __typename?: 'Money', formatted: string }, items: Array<{ __typename?: 'CartItem', id: string, name?: string | null, images?: Array<string | null> | null, lineTotal: { __typename?: 'Money', formatted: string }, unitTotal: { __typename?: 'Money', formatted: string } }> };

export type GetCartBydIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCartBydIdQuery = { __typename?: 'Query', cart?: { __typename?: 'Cart', id: string, totalItems?: number | null, totalUniqueItems?: number | null, subTotal: { __typename?: 'Money', formatted: string }, items: Array<{ __typename?: 'CartItem', id: string, name?: string | null, images?: Array<string | null> | null, lineTotal: { __typename?: 'Money', formatted: string }, unitTotal: { __typename?: 'Money', formatted: string } }> } | null };

export type RemoveFromCartMutationVariables = Exact<{
  input: RemoveCartItemInput;
}>;


export type RemoveFromCartMutation = { __typename?: 'Mutation', removeItem: { __typename?: 'Cart', id: string, totalItems?: number | null, totalUniqueItems?: number | null, subTotal: { __typename?: 'Money', formatted: string }, items: Array<{ __typename?: 'CartItem', id: string, name?: string | null, images?: Array<string | null> | null, lineTotal: { __typename?: 'Money', formatted: string }, unitTotal: { __typename?: 'Money', formatted: string } }> } };

export const CartInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalUniqueItems"}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formatted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"lineTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formatted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formatted"}}]}}]}}]}}]} as unknown as DocumentNode<CartInfoFragment, unknown>;
export const AddToCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddToCartInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartInfo"}}]}}]}},...CartInfoFragmentDoc.definitions]} as unknown as DocumentNode<AddToCartMutation, AddToCartMutationVariables>;
export const GetCartBydIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCartBydId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartInfo"}}]}}]}},...CartInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetCartBydIdQuery, GetCartBydIdQueryVariables>;
export const RemoveFromCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFromCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveCartItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartInfo"}}]}}]}},...CartInfoFragmentDoc.definitions]} as unknown as DocumentNode<RemoveFromCartMutation, RemoveFromCartMutationVariables>;
export const CartInfo = gql`
    fragment CartInfo on Cart {
  id
  totalItems
  totalUniqueItems
  subTotal {
    formatted
  }
  items {
    id
    name
    images
    lineTotal {
      formatted
    }
    unitTotal {
      formatted
    }
  }
}
    `;
export const AddToCart = gql`
    mutation AddToCart($input: AddToCartInput!) {
  addItem(input: $input) {
    ...CartInfo
  }
}
    ${CartInfo}`;
export const GetCartBydId = gql`
    query GetCartBydId($id: ID!) {
  cart(id: $id) {
    ...CartInfo
  }
}
    ${CartInfo}`;
export const RemoveFromCart = gql`
    mutation RemoveFromCart($input: RemoveCartItemInput!) {
  removeItem(input: $input) {
    ...CartInfo
  }
}
    ${CartInfo}`;