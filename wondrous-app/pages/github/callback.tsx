import { useLazyQuery, useMutation } from '@apollo/client';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useCallback } from 'react';
import { storeAuthHeader, useMe, withAuth } from 'components/Auth/withAuth';
import { InviteWelcomeBoxWrapper } from 'components/Onboarding/styles';
import { CONNECT_ORG_GITHUB } from 'graphql/mutations/org';

function Callback() {
  const user = useMe();
  const router = useRouter();
  const { code } = router.query;
  const state = router?.query?.state as string;
  const installationId = router?.query?.installation_id as string;
  const [connectOrgGithub] = useMutation(CONNECT_ORG_GITHUB);
  console.log('installationid', installationId);
  useEffect(() => {
    if (code && state) {
      const parsedState = JSON.parse(state);
      const redirectUrl = decodeURIComponent(parsedState?.redirectUrl);
      const orgId = parsedState?.orgId;
      connectOrgGithub({
        variables: {
          orgId,
          githubAuthCode: code,
          installationId,
        },
      }).then(() => {
        console.log('redirectUrl', redirectUrl);
        window.location.href = redirectUrl;
      });
    }
  }, [code, state]);

  return (
    <InviteWelcomeBoxWrapper
      style={{
        minHeight: '100vh',
      }}
    >
      <CircularProgress />
    </InviteWelcomeBoxWrapper>
  );
}

export default withAuth(Callback);
