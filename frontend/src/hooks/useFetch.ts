import { useNavigate } from "react-router-dom";

type FetchOptions = RequestInit & {
  skipAuthRedirect?: boolean;
};

export function useFetch() {
  const navigate = useNavigate();

  const customFetch = async <T>(
    url: string,
    options: FetchOptions = {}
  ): Promise<T> => {
    const response = await fetch(url, {
      credentials: "include", // important if using cookies
      ...options,
    });

    if (response.status === 401 && !options.skipAuthRedirect) {
      // optional: clear auth state
      localStorage.removeItem("token");

      navigate("/login", { replace: true });
      throw new Error("Unauthorized");
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Something went wrong");
    }

    return response.json();
  };

  return { fetch: customFetch };
}
