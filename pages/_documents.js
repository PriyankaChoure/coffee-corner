import Document, { Main, NextScript, Head } from 'next/document';

class MyDocuments extends Document{
    render() { 
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Bold.ttf"
                        as="font"
                        crossOrigin='anonymous'
                    >
                    </link>
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Italic.ttf"
                        as="font"
                        crossOrigin='anonymous'
                    >
                    </link>
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Regular.ttf"
                        as="font"
                        crossOrigin='anonymous'
                    >
                    </link>
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-SemiBold.ttf"
                        as="font"
                        crossOrigin='anonymous'
                    >
                    </link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
            
        
        )
        }
    }


export default MyDocuments;