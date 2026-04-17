/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryTransactionType {
  SimpleExpense = 'simple_expense',
  Income = 'income',
  Installment = 'installment',
  Recurrence = 'recurrence',
}

export interface GithubComFelipe1496OpenWalletInternalResourcesCategoriesRepositoryCategory {
  color?: string;
  created_at?: string;
  id?: string;
  name?: string;
  user_id?: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesCategoriesRepositoryCategoryAmountPerPeriod {
  color?: string;
  id?: string;
  name?: string;
  period?: string;
  total_amount?: number;
  user_id?: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesRecurrencesRepositoryRecurrence {
  amount?: number;
  category_color?: string;
  category_id?: string;
  category_name?: string;
  created_at?: string;
  day_of_month?: number;
  end_period?: string;
  id?: string;
  name?: string;
  note?: string;
  start_period?: string;
  user_id?: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateEntryRequest {
  /**
   * @min -999999
   * @max 999999
   */
  amount: number;
  reference_date: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateTransactionRequest {
  category_id?: string;
  /**
   * @maxItems 100
   * @minItems 1
   */
  entries: GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateEntryRequest[];
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 400
   */
  note?: string;
  type: 'installment' | 'simple_expense' | 'income';
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateTransactionResponse {
  data?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateTransactionResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateTransactionResponseData {
  transaction?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryTransaction;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsListEntriesResponse {
  data?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsListEntriesResponseData;
  query?: GithubComFelipe1496OpenWalletInternalUtilsQueryMeta;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsListEntriesResponseData {
  entries?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryViewEntry[];
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateEntryRequest {
  /**
   * @min -999999
   * @max 999999
   */
  amount: number;
  reference_date: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateTransactionRequest {
  category_id?: string;
  /**
   * @maxItems 100
   * @minItems 1
   */
  entries?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateEntryRequest[];
  /**
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * @minLength 0
   * @maxLength 400
   */
  note?: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateTransactionResponse {
  data?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateTransactionResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateTransactionResponseData {
  transaction?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryTransaction;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryTransaction {
  category_id?: string;
  created_at?: string;
  description?: string;
  id?: string;
  name?: string;
  recurrence_id?: string;
  type?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryTransactionType;
  user_id?: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryViewEntry {
  amount?: number;
  category_color?: string;
  category_id?: string;
  category_name?: string;
  created_at?: string;
  description?: string;
  id?: string;
  installment?: number;
  name?: string;
  period?: string;
  recurrence_id?: string;
  reference_date?: string;
  total_amount?: number;
  total_installments?: number;
  transaction_id?: string;
  type?: GithubComFelipe1496OpenWalletInternalResourcesTransactionsRepositoryTransactionType;
  user_id?: string;
}

export interface GithubComFelipe1496OpenWalletInternalResourcesUsersRepositoryUser {
  avatar_url?: string;
  created_at?: string;
  email?: string;
  id?: string;
  name?: string;
  username?: string;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsHTTPError {
  error?: GithubComFelipe1496OpenWalletInternalUtilsHTTPErrorData;
  status?: number;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsHTTPErrorData {
  message?: string;
  type?: string;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsQueryMeta {
  next_page?: boolean;
  page?: number;
  per_page?: number;
  total_items?: number;
  total_pages?: number;
}

export interface InternalResourcesAuthHandlersLoginGoogleRequest {
  code?: string;
}

export interface InternalResourcesAuthHandlersLoginGoogleResponse {
  data?: InternalResourcesAuthHandlersLoginGoogleResponseData;
}

export interface InternalResourcesAuthHandlersLoginGoogleResponseData {
  access_token?: string;
  user?: GithubComFelipe1496OpenWalletInternalResourcesUsersRepositoryUser;
}

export interface InternalResourcesCategoriesHandlersCreateCategoryRequest {
  color: string;
  name: string;
}

export interface InternalResourcesCategoriesHandlersCreateCategoryResponse {
  data?: InternalResourcesCategoriesHandlersCreateCategoryResponseData;
}

export interface InternalResourcesCategoriesHandlersCreateCategoryResponseData {
  category?: GithubComFelipe1496OpenWalletInternalResourcesCategoriesRepositoryCategory;
}

export interface InternalResourcesCategoriesHandlersListCategoriesResponse {
  data?: InternalResourcesCategoriesHandlersListCategoriesResponseData;
  query?: GithubComFelipe1496OpenWalletInternalUtilsQueryMeta;
}

export interface InternalResourcesCategoriesHandlersListCategoriesResponseData {
  categories?: GithubComFelipe1496OpenWalletInternalResourcesCategoriesRepositoryCategory[];
}

export interface InternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponse {
  data?: InternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponseData;
  query?: GithubComFelipe1496OpenWalletInternalUtilsQueryMeta;
}

export interface InternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponseData {
  categories?: GithubComFelipe1496OpenWalletInternalResourcesCategoriesRepositoryCategoryAmountPerPeriod[];
}

export interface InternalResourcesCategoriesHandlersUpdateCategoryRequest {
  color?: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  name?: string;
}

export interface InternalResourcesCategoriesHandlersUpdateCategoryResponse {
  data?: InternalResourcesCategoriesHandlersUpdateCategoryResponseData;
}

export interface InternalResourcesCategoriesHandlersUpdateCategoryResponseData {
  category?: GithubComFelipe1496OpenWalletInternalResourcesCategoriesRepositoryCategory;
}

export interface InternalResourcesRecurrencesHandlersCreateRecurrenceRequest {
  amount: number;
  category_id?: string;
  /**
   * @min 1
   * @max 31
   */
  day_of_month: number;
  end_period?: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 400
   */
  note?: string;
  start_period: string;
}

export interface InternalResourcesRecurrencesHandlersCreateRecurrenceResponse {
  data?: InternalResourcesRecurrencesHandlersCreateRecurrenceResponseData;
}

export interface InternalResourcesRecurrencesHandlersCreateRecurrenceResponseData {
  recurrence?: GithubComFelipe1496OpenWalletInternalResourcesRecurrencesRepositoryRecurrence;
}

export interface InternalResourcesRecurrencesHandlersListRecurrencesResponse {
  data?: InternalResourcesRecurrencesHandlersListRecurrencesResponseData;
  query?: GithubComFelipe1496OpenWalletInternalUtilsQueryMeta;
}

export interface InternalResourcesRecurrencesHandlersListRecurrencesResponseData {
  recurrences?: GithubComFelipe1496OpenWalletInternalResourcesRecurrencesRepositoryRecurrence[];
}

export interface InternalResourcesRecurrencesHandlersUpdateRecurrenceRequest {
  amount?: number;
  category_id?: string;
  /**
   * @min 1
   * @max 31
   */
  day_of_month?: number;
  end_period?: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * @minLength 0
   * @maxLength 400
   */
  note?: string;
  start_period?: string;
}

export interface InternalResourcesRecurrencesHandlersUpdateRecurrenceResponse {
  data?: InternalResourcesRecurrencesHandlersUpdateRecurrenceResponseData;
}

export interface InternalResourcesRecurrencesHandlersUpdateRecurrenceResponseData {
  recurrence?: GithubComFelipe1496OpenWalletInternalResourcesRecurrencesRepositoryRecurrence;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  'data' | 'params' | 'url' | 'responseType'
> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  'data' | 'cancelToken'
> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Open Wallet API
 * @version 1.0
 * @contact
 *
 * This is the Open Wallet API.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description Authenticates user with Google OAuth
     *
     * @tags auth
     * @name V1LoginWithGoogle
     * @summary Login with Google
     * @request POST:/api/v1/auth/login/google
     */
    v1LoginWithGoogle: (
      body: InternalResourcesAuthHandlersLoginGoogleRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesAuthHandlersLoginGoogleResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/auth/login/google`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  categories = {
    /**
     * @description List categories
     *
     * @tags categories
     * @name V1ListCategories
     * @summary List categories
     * @request GET:/api/v1/categories
     * @secure
     */
    v1ListCategories: (
      query?: {
        /**
         * Page number
         * @default 1
         */
        page?: number;
        /**
         * Items per page
         * @default 10
         */
        per_page?: number;
        /**
         * Sort field
         * @example "name:asc,created_at:desc"
         */
        order_by?: string;
        /** Category filter */
        filter?: string;
        /** A category name to filter by */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesCategoriesHandlersListCategoriesResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/categories`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a category
     *
     * @tags categories
     * @name V1CreateCategory
     * @summary Create a category
     * @request POST:/api/v1/categories
     * @secure
     */
    v1CreateCategory: (
      body: InternalResourcesCategoriesHandlersCreateCategoryRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesCategoriesHandlersCreateCategoryResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/categories`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a category
     *
     * @tags categories
     * @name V1DeleteCategory
     * @summary Delete Category By ID
     * @request DELETE:/api/v1/categories/{category_id}
     * @secure
     */
    v1DeleteCategory: (categoryId: string, params: RequestParams = {}) =>
      this.request<void, GithubComFelipe1496OpenWalletInternalUtilsHTTPError>({
        path: `/api/v1/categories/${categoryId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update a category
     *
     * @tags categories
     * @name V1UpdateCategory
     * @summary Update Category By ID
     * @request PATCH:/api/v1/categories/{category_id}
     * @secure
     */
    v1UpdateCategory: (
      categoryId: string,
      body: InternalResourcesCategoriesHandlersUpdateCategoryRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesCategoriesHandlersUpdateCategoryResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/categories/${categoryId}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List categories with amount per period
     *
     * @tags categories
     * @name V1ListCategoryAmountPerPeriod
     * @summary List categories with amount per period
     * @request GET:/api/v1/categories/{period}
     * @secure
     */
    v1ListCategoryAmountPerPeriod: (
      period: string,
      query?: {
        /**
         * Page number
         * @default 1
         */
        page?: number;
        /**
         * Items per page
         * @default 10
         */
        per_page?: number;
        /** Category filter */
        filter?: string;
        /**
         * Sort field
         * @example "name:asc,created_at:desc"
         */
        order_by?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/categories/${period}`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  recurrences = {
    /**
     * @description List user recurrences
     *
     * @tags recurrences
     * @name V1ListRecurrences
     * @summary List recurrences
     * @request GET:/api/v1/recurrences
     * @secure
     */
    v1ListRecurrences: (
      query?: {
        /**
         * Page number
         * @default 1
         */
        page?: number;
        /**
         * Items per page
         * @default 10
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesRecurrencesHandlersListRecurrencesResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/recurrences`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new recurrence template
     *
     * @tags recurrences
     * @name V1CreateRecurrence
     * @summary Create a recurrence
     * @request POST:/api/v1/recurrences
     * @secure
     */
    v1CreateRecurrence: (
      body: InternalResourcesRecurrencesHandlersCreateRecurrenceRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesRecurrencesHandlersCreateRecurrenceResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/recurrences`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a recurrence template
     *
     * @tags recurrences
     * @name V1DeleteRecurrence
     * @summary Delete Recurrence By ID
     * @request DELETE:/api/v1/recurrences/{id}
     * @secure
     */
    v1DeleteRecurrence: (
      id: string,
      query?: {
        /**
         * Handling of linked transactions: 'all' (default) deletes the recurrence and all related transactions (past/future); 'until_current' preserves past history but removes future recurrences.
         * @default "all"
         */
        scope?: 'all' | 'until_current';
      },
      params: RequestParams = {},
    ) =>
      this.request<void, GithubComFelipe1496OpenWalletInternalUtilsHTTPError>({
        path: `/api/v1/recurrences/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update a recurrence template
     *
     * @tags recurrences
     * @name V1UpdateRecurrence
     * @summary Update a recurrence
     * @request PATCH:/api/v1/recurrences/{id}
     * @secure
     */
    v1UpdateRecurrence: (
      id: string,
      body: InternalResourcesRecurrencesHandlersUpdateRecurrenceRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        InternalResourcesRecurrencesHandlersUpdateRecurrenceResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/recurrences/${id}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Generates entry records for all recurrence templates that don't already have one in the given period.
     *
     * @tags recurrences
     * @name V1PrepareRecurrence
     * @summary Prepare recurrences for a period
     * @request POST:/api/v1/recurrences/{period}
     * @secure
     */
    v1PrepareRecurrence: (period: string, params: RequestParams = {}) =>
      this.request<void, GithubComFelipe1496OpenWalletInternalUtilsHTTPError>({
        path: `/api/v1/recurrences/${period}`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  transactions = {
    /**
     * @description Create a transaction with all of it entries
     *
     * @tags transactions
     * @name V1CreateTransaction
     * @summary Create a transaction
     * @request POST:/api/v1/transactions
     * @secure
     */
    v1CreateTransaction: (
      body: GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateTransactionRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        GithubComFelipe1496OpenWalletInternalResourcesTransactionsCreateTransactionResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/transactions`,
        method: 'POST',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List a detailed view of entries joined with transactions for a given period
     *
     * @tags transactions
     * @name V1ListEntries
     * @summary List entries
     * @request GET:/api/v1/transactions/entries
     * @secure
     */
    v1ListEntries: (
      query?: {
        /**
         * Page number
         * @default 1
         */
        page?: number;
        /**
         * Items per page
         * @default 10
         */
        per_page?: number;
        /**
         * Sort field
         * @example "name:asc,created_at:desc"
         */
        order_by?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GithubComFelipe1496OpenWalletInternalResourcesTransactionsListEntriesResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/transactions/entries`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a transaction and all entries related by the ID of the transaction
     *
     * @tags transactions
     * @name V1DeleteTransaction
     * @summary Delete Transaction By ID
     * @request DELETE:/api/v1/transactions/{transaction_id}
     * @secure
     */
    v1DeleteTransaction: (transactionId: string, params: RequestParams = {}) =>
      this.request<void, GithubComFelipe1496OpenWalletInternalUtilsHTTPError>({
        path: `/api/v1/transactions/${transactionId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update a transaction
     *
     * @tags transactions
     * @name V1UpdateTransaction
     * @summary Update a transaction
     * @request PATCH:/api/v1/transactions/{transaction_id}
     * @secure
     */
    v1UpdateTransaction: (
      transactionId: string,
      body: GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateTransactionRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        GithubComFelipe1496OpenWalletInternalResourcesTransactionsUpdateTransactionResponse,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/transactions/${transactionId}`,
        method: 'PATCH',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
