import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import LoginForm from "@components/auth/login-form";
import Cookies from "js-cookie";
import { getToken } from "@framework/utils/get-token";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";

// import {getInitialProps} from "next";
export default function SignInPage() {
  return (
    <>
      <Container>
        <div className="py-16 lg:py-20">
          <LoginForm />
        </div>
      </Container>
    </>
  );
}
SignInPage.Layout = Layout;

export async function getServerSideProps(context) {
  const { params, req, res, query, locale } = context;
  console.log(req.cookies.auth_token);
  if (req.cookies.auth_token) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer"
      ]))
    }
  };
}
