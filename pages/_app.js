import Layout from "@/components/Layout";
import "../styles/global.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout home={router.pathname === "/"}>
      <Component {...pageProps} />
    </Layout>
  );
}
