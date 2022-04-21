import createCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { CacheProviderProps } from './cache.types';
import { globalStyles } from '../globals';

const cache = createCache({ key: 'trips-emotion-key-cache' });

export const CacheProvider = ({ children }: CacheProviderProps) => (
  <EmotionCacheProvider value={cache}>
    {globalStyles}
    {children}
  </EmotionCacheProvider>
);
