export {};

declare global {
  type ApiSuccessResponse<T> = {
    status: number;
    message: string;
    data: T;
  };

  type ApiErrorResponse = {
    status: number;
    message: string;
    error?: string | string[];
    data?: undefined;
  };

  type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;
}
