import { useWeb3React } from '@web3-react/core';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Web3Provider } from '@ethersproject/providers';
import { useContext, useEffect, useState } from 'react';
import useAlerts from 'hooks/useAlerts';
import useInjectedProviderListener from './useInjectedProviderListener';
import { WonderWeb3Context } from '../context/WonderWeb3Context';

/**
 * Hook that adds additional low-level functionality to web3-react useWeb3React.
 */
export default function useWeb3() {
  const context = useWeb3React<Web3Provider>();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;
  const { provider, setProvider, isActivating, setIsActivating } = useContext(WonderWeb3Context);

  const { showError } = useAlerts();

  useEffect(() => {
    if (isActivating && !!connector) {
      setIsActivating(null);
    }
  }, [isActivating, connector, setIsActivating]);

  useEffect(() => {
    if (!active) {
      return;
    }
    const getProvider = async () => {
      const { provider: prov } = await connector.activate();
      setProvider(prov);
    };
    getProvider();
  }, [active, connector, setProvider]);

  const customActivate = (conn: AbstractConnector, done?: Function) => {
    setIsActivating(true);
    activate(conn, (error) => {
      if (error) {
        setIsActivating(null);
        console.log('Error while activating web3 connector', error);
        showError(
          "Can't activate web3 connector, Check that you're logged in on metamask/coinbase wallet, or refresh the page"
        );
      }
    }).then(() => {
      done && done();
    });
  };

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  const isSubscribed = useInjectedProviderListener({
    suppress: !!isActivating,
    connector,
  });

  return {
    connector,
    library,
    chainId,
    account,
    activate: customActivate,
    deactivate,
    active,
    error,
    isActivating,
    provider,
    isSubscribed,
  };
}
