import Container from "@mui/material/Container";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
    const { t } = useTranslation()
  return (
    <Container maxWidth="xl">
      <div>Main pages</div>
      <div>{t("test")}</div>
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