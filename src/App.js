import React from 'react';
import ReactDOM from 'react-dom';
import * as functions from '@adobe/aem-core-cif-react-components';
import {I18nextProvider} from 'react-i18next';

import './App.css';

const partialConfig = {
    mountingPoints: {
        accountContainer: '.header__accountTrigger #miniaccount',
        addressBookContainer: '#addressbook',
        authBarContainer: 'aside.navigation__root #miniaccount',
        cartTrigger: '.header__cartTrigger',
        navPanel: 'aside.navigation__root',
        bundleProductOptionsContainer: '#bundle-product-options',
        minicart: '#minicart',
    },
    pagePaths: {
        addressBook: '/content/venia/us/en/my-account/address-book.html',
    },
};

const App = () => {
    console.log(functions);
    const {storeView = 'default', graphqlEndpoint} = document.querySelector(
        'body'
    ).dataset;
    const {mountingPoints, pagePaths} = partialConfig;
    const config = {
        ...partialConfig,
        storeView,
        graphqlEndpoint,
    };

    const {ConfigContextProvider, CommerceApp, Portal, CartTrigger} = functions;

    const [isFilled, setIsFilled] = React.useState(false);

    const filledClassName = isFilled && `cmp-Button__button__filled`;

    return (
        <I18nextProvider i18n={i18n} defaultNS="common">
            <ConfigContextProvider config={config}>
                <CommerceApp>
                    <div className="content">
                        <h1>Hello, this is the React app</h1>
                        <button
                            className={`cmp-Button__button__root ${filledClassName}`}
                            onClick={() => {
                                setIsFilled(!isFilled);
                            }}>
                            Click me
                        </button>
                    </div>
                    <Portal selector={mountingPoints.cartTrigger}>
                        <CartTrigger />
                    </Portal>
                </CommerceApp>
            </ConfigContextProvider>
        </I18nextProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
