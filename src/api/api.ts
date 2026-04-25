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

export interface GithubComFelipe1496OpenWalletInternalUtilsHTTPError {
  error?: GithubComFelipe1496OpenWalletInternalUtilsHTTPErrorData;
  status?: number;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsHTTPErrorData {
  message?: string;
  type?: string;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesCategoriesHandlersListCategoriesResponseData {
  data: InternalResourcesCategoriesHandlersListCategoriesResponseData;
  query: GithubComFelipe1496OpenWalletInternalUtilsQuerybuilderMetadata;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponseData {
  data: InternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponseData;
  query: GithubComFelipe1496OpenWalletInternalUtilsQuerybuilderMetadata;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesRecurrencesHandlersListRecurrencesResponseData {
  data: InternalResourcesRecurrencesHandlersListRecurrencesResponseData;
  query: GithubComFelipe1496OpenWalletInternalUtilsQuerybuilderMetadata;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesTransactionsHandlersListEntriesResponseData {
  data: InternalResourcesTransactionsHandlersListEntriesResponseData;
  query: GithubComFelipe1496OpenWalletInternalUtilsQuerybuilderMetadata;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesAuthHandlersLoginGoogleResponseData {
  data: InternalResourcesAuthHandlersLoginGoogleResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesCategoriesHandlersCreateCategoryResponseData {
  data: InternalResourcesCategoriesHandlersCreateCategoryResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesCategoriesHandlersUpdateCategoryResponseData {
  data: InternalResourcesCategoriesHandlersUpdateCategoryResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesRecurrencesHandlersCreateRecurrenceResponseData {
  data: InternalResourcesRecurrencesHandlersCreateRecurrenceResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesRecurrencesHandlersUpdateRecurrenceResponseData {
  data: InternalResourcesRecurrencesHandlersUpdateRecurrenceResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesTransactionsHandlersCreateTransactionResponseData {
  data: InternalResourcesTransactionsHandlersCreateTransactionResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesTransactionsHandlersSummaryResponseData {
  data: InternalResourcesTransactionsHandlersSummaryResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesTransactionsHandlersUpdateTransactionResponseData {
  data: InternalResourcesTransactionsHandlersUpdateTransactionResponseData;
}

export interface GithubComFelipe1496OpenWalletInternalUtilsQuerybuilderMetadata {
  next_page: boolean;
  page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
}

export interface InternalResourcesAuthHandlersLoginGoogleRequest {
  code: string;
}

export interface InternalResourcesAuthHandlersLoginGoogleResponseData {
  access_token: string;
  user: InternalResourcesAuthHandlersUserResource;
}

export interface InternalResourcesAuthHandlersUserResource {
  avatar_url: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
}

export interface InternalResourcesCategoriesHandlersCategoryAmountPerPeriodResource {
  color: string;
  id: string;
  name: string;
  total_amount: number;
}

export interface InternalResourcesCategoriesHandlersCategoryResource {
  color: string;
  created_at: string;
  id: string;
  name: string;
  user_id: string;
}

export interface InternalResourcesCategoriesHandlersCreateCategoryRequest {
  color: string;
  name: string;
}

export interface InternalResourcesCategoriesHandlersCreateCategoryResponseData {
  category: InternalResourcesCategoriesHandlersCategoryResource;
}

export interface InternalResourcesCategoriesHandlersListCategoriesResponseData {
  categories: InternalResourcesCategoriesHandlersCategoryResource[];
}

export interface InternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponseData {
  categories: InternalResourcesCategoriesHandlersCategoryAmountPerPeriodResource[];
}

export interface InternalResourcesCategoriesHandlersUpdateCategoryRequest {
  color?: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  name?: string;
}

export interface InternalResourcesCategoriesHandlersUpdateCategoryResponseData {
  category: InternalResourcesCategoriesHandlersCategoryResource;
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

export interface InternalResourcesRecurrencesHandlersCreateRecurrenceResponseData {
  recurrence: InternalResourcesRecurrencesHandlersRecurrenceResource;
}

export interface InternalResourcesRecurrencesHandlersListRecurrencesResponseData {
  recurrences: InternalResourcesRecurrencesHandlersRecurrenceResource[];
}

export interface InternalResourcesRecurrencesHandlersRecurrenceResource {
  amount: number;
  category_color?: string;
  category_id?: string;
  category_name?: string;
  created_at: string;
  day_of_month: number;
  end_period?: string;
  id: string;
  name: string;
  note?: string;
  start_period: string;
  user_id: string;
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

export interface InternalResourcesRecurrencesHandlersUpdateRecurrenceResponseData {
  recurrence: InternalResourcesRecurrencesHandlersRecurrenceResource;
}

export interface InternalResourcesTransactionsHandlersCreateEntryRequest {
  /**
   * @min -999999
   * @max 999999
   */
  amount: number;
  reference_date: string;
}

export interface InternalResourcesTransactionsHandlersCreateTransactionRequest {
  category_id?: string;
  /**
   * @maxItems 100
   * @minItems 1
   */
  entries: InternalResourcesTransactionsHandlersCreateEntryRequest[];
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

export interface InternalResourcesTransactionsHandlersCreateTransactionResponseData {
  transaction: InternalResourcesTransactionsHandlersTransactionResource;
}

export interface InternalResourcesTransactionsHandlersEntryResource {
  amount: number;
  category_color?: string;
  category_id?: string;
  category_name?: string;
  created_at: string;
  description?: string;
  id: string;
  installment: number;
  name: string;
  period: string;
  recurrence_id?: string;
  reference_date: string;
  total_amount: number;
  total_installments: number;
  transaction_id: string;
  type: string;
  user_id: string;
}

export interface InternalResourcesTransactionsHandlersListEntriesResponseData {
  entries: InternalResourcesTransactionsHandlersEntryResource[];
}

export interface InternalResourcesTransactionsHandlersMonthlySummaryResource {
  balance: number;
  expense: number;
  income: number;
  period: string;
}

export interface InternalResourcesTransactionsHandlersSummaryResponseData {
  summary: InternalResourcesTransactionsHandlersMonthlySummaryResource[];
}

export interface InternalResourcesTransactionsHandlersTransactionResource {
  category_color?: string;
  category_id?: string;
  category_name?: string;
  created_at: string;
  description?: string;
  id: string;
  name: string;
  recurrence_id?: string;
  type: string;
  user_id: string;
}

export interface InternalResourcesTransactionsHandlersUpdateEntryRequest {
  /**
   * @min -999999
   * @max 999999
   */
  amount: number;
  reference_date: string;
}

export interface InternalResourcesTransactionsHandlersUpdateTransactionRequest {
  category_id?: string;
  /**
   * @maxItems 100
   * @minItems 1
   */
  entries?: InternalResourcesTransactionsHandlersUpdateEntryRequest[];
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

export interface InternalResourcesTransactionsHandlersUpdateTransactionResponseData {
  transaction: InternalResourcesTransactionsHandlersTransactionResource;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
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
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesAuthHandlersLoginGoogleResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesCategoriesHandlersListCategoriesResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesCategoriesHandlersCreateCategoryResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesCategoriesHandlersUpdateCategoryResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesCategoriesHandlersListCategoryAmountPerPeriodResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesRecurrencesHandlersListRecurrencesResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesRecurrencesHandlersCreateRecurrenceResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesRecurrencesHandlersUpdateRecurrenceResponseData,
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
      body: InternalResourcesTransactionsHandlersCreateTransactionRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesTransactionsHandlersCreateTransactionResponseData,
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
        GithubComFelipe1496OpenWalletInternalUtilsPaginatedResponseInternalResourcesTransactionsHandlersListEntriesResponseData,
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
     * @description Returns total income, expense and balance for each month in the specified period range. Note: Only periods with existing transactions/entries will be returned.
     *
     * @tags transactions
     * @name V1GetSummary
     * @summary Get financial summary grouped by month
     * @request GET:/api/v1/transactions/summary
     * @secure
     */
    v1GetSummary: (
      query: {
        /**
         * - Required: 'period gte YYYYMM and period lte YYYYMM'
         * - Allowed fields & ops:
         *   - period: eq, in, gte, lte
         *   - total_expense: eq, gt, gte, lt, lte
         *   - total_income: eq, gt, gte, lt, lte
         *   - total_balance: eq, gt, gte, lt, lte
         * - Rules: gte <= lte, max 12 months range
         */
        filter: string;
        /**
         * Sort field.
         * - Allowed: period, total_expense, total_income, total_balance
         * @example "period:desc,total_balance:asc"
         */
        order_by?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesTransactionsHandlersSummaryResponseData,
        GithubComFelipe1496OpenWalletInternalUtilsHTTPError
      >({
        path: `/api/v1/transactions/summary`,
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
      body: InternalResourcesTransactionsHandlersUpdateTransactionRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        GithubComFelipe1496OpenWalletInternalUtilsResponseDataInternalResourcesTransactionsHandlersUpdateTransactionResponseData,
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
