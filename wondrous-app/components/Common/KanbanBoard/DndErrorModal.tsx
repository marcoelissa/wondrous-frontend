import React from 'react';

import {
  CreateFormPreviewButton,
  CreateLayoutsModalHeader,
  CreateLayoutsModalItemContainer,
  CreateLayoutsModalItemTitle,
  CreateModalOverlay,
} from 'components/CreateEntity/styles';
import { ModalBody } from './styles';

function DndErrorModal(props) {
  const { handleClose, setEntityType, open } = props;

  return (
    <CreateModalOverlay open={open} onClose={handleClose}>
      <ModalBody>
        <CreateLayoutsModalHeader />
        <CreateLayoutsModalItemContainer>
          <CreateLayoutsModalItemTitle>
            Cannot drag task with rewards to completed without a submission.
            <br />
            <br />
            Please either prompt the assignee to submit or remove the rewards.
          </CreateLayoutsModalItemTitle>
          <CreateFormPreviewButton
            onClick={handleClose}
            style={{
              marginTop: '24px',
            }}
          >
            Close
          </CreateFormPreviewButton>
        </CreateLayoutsModalItemContainer>
      </ModalBody>
    </CreateModalOverlay>
  );
}

export default DndErrorModal;
