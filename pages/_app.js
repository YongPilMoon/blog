import Layout from "@/components/Layout";
import "../styles/global.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [visitedTime] = useState(new Date());

  return (
    <Layout home={router.pathname === "/"}>
      <div>
        visited:{" "}
        {formatDistanceToNow(visitedTime, {
          addSuffix: true,
          includeSeconds: true,
        })}
      </div>
      <ErrorBoundary>
        <Component {...pageProps} pathname={router.pathname} />
      </ErrorBoundary>
    </Layout>
  );
}
