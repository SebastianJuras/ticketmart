import '../styles/globals.css'
import { buildClient } from 'src/api/build-client'
import App from 'next/app'
 
const AppComponent = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}
AppComponent.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  console.log(Object.keys(appContext).toString())
  const {data} = await buildClient(appContext.ctx).get('/api/users/currentuser')
  console.log(data)
  return { data,...appProps }
}
export default AppComponent;