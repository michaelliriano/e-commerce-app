import type { AppProps } from "next/app";
import { store } from "../app/store";
import { Provider } from "react-redux";
import Shell from "@/components/common/Shell";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </Provider>
  );
}
