import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import Home42 from "./pages/Home42";
import Swap from "./pages/Swap";
import FreeTokens from "./pages/FreeTokens";
import Staking from "./pages/Staking";
import ClaimRewards from "./pages/ClaimRewards";


function App() {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>adams exchange</title>
        </Helmet>
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home42 />
                </Route>
                <Route path="/free-tokens">
                    <FreeTokens />
                </Route>
                <Route path="/swap">
                    <Swap />
                </Route>
                <Route path="/staking">
                    <Staking />
                </Route>
                <Route path="/claim-rewards">
                    <ClaimRewards />
                </Route>
            </Switch>
        </Layout>
        </>
    );
}

export default App;
