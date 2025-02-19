import { OrgInviteLinkModal } from 'components/Common/InviteLinkModal/OrgInviteLink';
import { PodInviteLinkModal } from 'components/Common/InviteLinkModal/podInviteLink';
import { GreyButton } from 'components/Common/SidebarStyles';
import { useState } from 'react';
import { useOrgBoard } from 'utils/hooks';

const InviteButton = ({ id, canManage }) => {
  const orgBoard = useOrgBoard();
  const [openInvite, setOpenInvite] = useState(false);
  const handleOnClickInvite = () => setOpenInvite(true);
  if (!canManage) return null;
  return (
    <>
      {orgBoard ? (
        <OrgInviteLinkModal orgId={id} open={openInvite} onClose={() => setOpenInvite(false)} />
      ) : (
        <PodInviteLinkModal podId={id} open={openInvite} onClose={() => setOpenInvite(false)} />
      )}
      <GreyButton onClick={handleOnClickInvite}>Invite</GreyButton>
    </>
  );
};

export default InviteButton;
