export type Merge<T, K> = Omit<K, keyof T> & T;
