import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_ORG_INVITE_ORG_INFO } from 'graphql/queries/org';

import { Invite } from 'components/Onboarding/Invite';
import { MainWrapper } from 'components/Onboarding/styles';
import { REDEEM_ORG_INVITE_LINK } from 'graphql/mutations';
import { withAuth, useMe } from 'components/Auth/withAuth';

function ContributorOnboardingPage() {
  const router = useRouter();

  const { token } = router.query;

  const [getOrgInviteOrgInfo, { data: orgData }] = useLazyQuery(GET_ORG_INVITE_ORG_INFO);

  const user = useMe();
  const [redeemOrgInviteLink] = useMutation(REDEEM_ORG_INVITE_LINK);
  const orgInfo = orgData?.getInvitedOrgInfo;
  useEffect(() => {
    if (token) {
      getOrgInviteOrgInfo({ variables: { token } });
    }

    if (user && token) {
      if (orgInfo) {
        redeemOrgInviteLink({
          variables: {
            token,
          },
          onCompleted: (data) => {
            router.push(`/organization/${orgInfo?.username}/boards`, undefined, {
              shallow: true,
            });
          },
          onError: () => {
            router.push(`/organization/${orgInfo?.username}/boards`, undefined, {
              shallow: true,
            });
          },
        });
      }
    }
  }, [user, orgInfo, token, router]);
  return (
    <MainWrapper>
      <Invite orgInfo={orgInfo} redeemOrgInviteLink={redeemOrgInviteLink} />
    </MainWrapper>
  );
}

export default withAuth(ContributorOnboardingPage);
