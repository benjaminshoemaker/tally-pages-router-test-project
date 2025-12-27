import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useFastPrAnalytics } from '@/components/fast-pr-analytics';
export default function App({ Component, pageProps }: AppProps) {
  useFastPrAnalytics();
  return <Component {...pageProps} />;
}
