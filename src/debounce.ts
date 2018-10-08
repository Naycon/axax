/**
 * Debounce an async iterator. Only emit values when no new value has been received during the provided timer duration.
 */
export function debonce<T>(timer: (value: T) => Promise<void>) {
  return async function* inner(source: AsyncIterable<T>) {
    let timerPromise: Promise<void> = null;
    let valueToEmit: T;
    for await (const item of source) {
      valueToEmit = item;
      if (!timerPromise) {
        timerPromise = timer(valueToEmit);
        fortsätt här
      }
      if (!predicate(item)) {
        break;
      }
      yield item;
    }
  };
}

