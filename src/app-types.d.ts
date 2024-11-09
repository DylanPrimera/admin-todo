export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: Todo;
  status?: number;
}
