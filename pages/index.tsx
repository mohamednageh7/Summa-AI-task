import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import TranslateWrapper from "../src/components/indexComp/TranslateWrapper";
import { useEffect } from "react";
import translationText from "../src/components/indexComp/fixedData";
import ListTranslateView from "../src/components/indexComp/ListTranslateView";

export default function Home() {
   useEffect(() => {
    localStorage.setItem('historyTrans',`${JSON.stringify(translationText)}`)
   },[])

  return (
    <Container maxWidth="xl">
      <TranslateWrapper/>
      <ListTranslateView/>
    </Container>
  );
}


export async function getStaticProps({ locale }:any) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
      },
    }
  }