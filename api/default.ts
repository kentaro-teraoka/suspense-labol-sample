export type ResponseType<T> = {
  data: T | null;
  error: Error | null;
}

export type ApiOptionsType = {
  success?: boolean; 
  delay?: number;
}

// export const defaultApiOptions: ApiOptionsType = {
//   success: true,
//   delay: 1000,
// }

export const mockApiResponse = <T>(
  value: T,
  options: ApiOptionsType = {}
): Promise<ResponseType<T>> => {
  const { success = true, delay = 1000 } = options

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success
        ? resolve({ data: value, error: null })
        : reject({ data: null, error: new Error('取得に失敗しました') })
    }, delay)
  })
}