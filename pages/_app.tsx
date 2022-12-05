import type { AppProps } from "next/app";
import { store } from "../app/store";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";

const Shell = dynamic(() => import("@/components/common/Shell"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </Provider>
  );
}
