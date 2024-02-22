import { Html, Head, Main, NextScript } from 'next/document';
import {
  DocumentHeadTags,
  documentGetInitialProps
} from '@mui/material-nextjs/v13-pagesRouter'
export default function Document(props) {
  return (
    <Html lang='pt-br'>
      <Head>
        <link rel='shortcut icon' href='/logo.ico' />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
}