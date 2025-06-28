export async function requestTemplate<T>(
  url: string,
  method: Request["method"] = "GET",
  body?: string
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ?? undefined,
    });

    const json = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: json.message || "Request failed",
        error: json.error || "Unknown error",
      };
    }

    return {
      status: response.status,
      message: json.message || "Request successful",
      data: json,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Network or unexpected error",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
