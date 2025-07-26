import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client/react/context/ApolloProvider";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    
    
  );
}