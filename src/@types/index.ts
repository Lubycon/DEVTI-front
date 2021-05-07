export type Merge<T, K> = Omit<K, keyof T> & T;

export type RequestData<T> = { [key in keyof T]: string };
