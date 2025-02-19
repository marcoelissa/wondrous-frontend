import React, { useRef, useState, useEffect, useMemo } from 'react';
import { ColumnsContext } from 'utils/contexts';
import Wrapper from 'components/organization/wrapper/wrapper';
import { BOARDS_MAP, Props, getFilterSchema } from 'components/organization/boards/boards';
import AddTeamMembers from 'components/CreateCollaborationModal/Steps/AddTeamMembers';
import { Modal as ModalComponent } from 'components/Modal';
import { useGlobalContext, useSteps } from 'utils/hooks';
import { PERMISSIONS } from 'utils/constants';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_ORG_USERS } from 'graphql/queries';
import { BATCH_ADD_MEMBERS } from 'graphql/mutations';
import AddMembersConfirmation from 'components/CreateCollaborationModal/Steps/Confirmation';
import { useRouter } from 'next/router';
import { insertUrlParam } from 'utils/index';
import { LIMIT } from 'services/board';
import SharedOrgHeader from './SharedOrgHeader';

function CollabBoard(props: Props) {
  const {
    columns,
    onLoadMore,
    hasMore,
    orgData,
    onSearch,
    onFilterChange,
    statuses,
    podIds,
    setColumns,
    userId,
    entityType,
    loading,
    activeView,
  } = props;
  const router = useRouter();
  const [openInviteModal, setOpenInviteModal] = useState(!!router?.query?.addMembers);
  const { step, setStep } = useSteps();
  const filterSchema = getFilterSchema(entityType, orgData?.id);
  const ActiveBoard = BOARDS_MAP[entityType];
  const { userPermissionsContext } = useGlobalContext();
  const footerRef = useRef();
  const footerLeftRef = useRef();
  const [users, setUsers] = useState({ admins: [], members: [], adminRole: null, memberRole: null });

  const handleModal = () => {
    if (router.query.addMembers) {
      insertUrlParam('addMembers', '');
    }
    setOpenInviteModal((prevState) => !prevState);
    setStep(0);
    setUsers({ admins: [], members: [], adminRole: null, memberRole: null });
  };

  const [batchAddUsers] = useMutation(BATCH_ADD_MEMBERS, {
    refetchQueries: ['getOrgFromUsername'],
    onCompleted: () => handleModal(),
  });

  const userOrgsWithFullAccess =
    userPermissionsContext?.orgPermissions &&
    Object.keys(userPermissionsContext?.orgPermissions).filter(
      (org) =>
        (userPermissionsContext.orgPermissions[org].includes(PERMISSIONS.FULL_ACCESS) ||
          userPermissionsContext.orgPermissions[org].includes(PERMISSIONS.MANAGE_MEMBER)) &&
        orgData?.id !== org
    );

  const parentOrg = orgData?.parentOrgs?.find((org) => userOrgsWithFullAccess?.includes(org?.id));

  const deleteMember = (userId) => {
    setUsers((prevState) => ({
      ...prevState,
      members: prevState.members.filter((user) => user.id !== userId),
    }));
  };

  const handleSubmit = (users) => {
    const adminUsersRoles = users.admins.map((user) => ({ userId: user.id, roleId: users.adminRole?.id }));
    const membersUserRoles = users.members.map((user) => ({ userId: user.id, roleId: users.memberRole?.id }));

    batchAddUsers({
      variables: {
        input: {
          orgId: orgData?.id,
          userRoles: adminUsersRoles.concat(membersUserRoles),
        },
      },
    });
  };

  const STEPS = [
    ({ selectedUsers, parentOrg, orgData }) => (
      <AddTeamMembers
        org={parentOrg}
        collabData={orgData}
        footerRef={footerRef}
        footerLeftRef={footerLeftRef}
        selectedUsers={selectedUsers}
        onCancel={handleModal}
        setUsers={setUsers}
        onSubmit={() => setStep((prevState) => prevState + 1)}
      />
    ),
    ({ selectedUsers }) => (
      <AddMembersConfirmation
        onSubmit={handleSubmit}
        onCancel={handleModal}
        footerRef={footerRef}
        collabDetails={orgData}
        selectedUsers={selectedUsers}
        parentOrgs={orgData?.parentOrgs}
        deleteMember={deleteMember}
      />
    ),
  ];

  const Component = useMemo(() => STEPS[step], [step]);

  return (
    <Wrapper
      orgData={orgData}
      onSearch={onSearch}
      filterSchema={filterSchema}
      onFilterChange={onFilterChange}
      statuses={statuses}
      podIds={podIds}
      isCollabWorkspace
      userId={userId}
      inviteButtonSettings={{
        label: 'Add members',
        inviteAction: handleModal,
      }}
      renderSharedHeader={(props) => <SharedOrgHeader {...props} />}
    >
      {openInviteModal && (
        <ModalComponent
          maxWidth={560}
          title="Add members"
          footerRight={<div ref={footerRef} />}
          footerLeft={<div ref={footerLeftRef} />}
          open={openInviteModal}
          onClose={handleModal}
        >
          {!!orgData && <Component selectedUsers={users} parentOrg={parentOrg} orgData={orgData} />}
        </ModalComponent>
      )}
      <ColumnsContext.Provider value={{ columns, setColumns }}>
        {!loading && (
          <ActiveBoard
            activeView={typeof activeView !== 'string' ? activeView[0] : activeView}
            columns={columns}
            onLoadMore={onLoadMore}
            hasMore={hasMore}
            setColumns={setColumns}
            entityType={entityType}
          />
        )}
      </ColumnsContext.Provider>
    </Wrapper>
  );
}

export default CollabBoard;
