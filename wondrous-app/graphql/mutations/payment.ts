import { gql } from '@apollo/client';

export const CREATE_PAYMENT_METHOD = gql`
  mutation createPaymentMethod($input: PaymentMethodInput) {
    createPaymentMethod(input: $input) {
      id
      orgId
      tokenAddress
      chain
      tokenName
      symbol
      icon
      decimal
      maxPayout
      notes
    }
  }
`;

export const ACTIVATE_PAYMENT_METHOD = gql`
  mutation activatePaymentMethod($paymentMethodId: ID!) {
    activatePaymentMethod(paymentMethodId: $paymentMethodId) {
      id
      orgId
      tokenAddress
      chain
      tokenName
      symbol
      icon
      decimal
      maxPayout
      notes
    }
  }
`;

export const DEACTIVATE_PAYMENT_METHOD = gql`
  mutation deactivatePaymentMethod($paymentMethodId: ID!) {
    deactivatePaymentMethod(paymentMethodId: $paymentMethodId) {
      id
      orgId
      tokenAddress
      chain
      tokenName
      symbol
      icon
      decimal
      maxPayout
      notes
    }
  }
`;

export const PROPOSE_GNOSIS_MULTISEND_FOR_SUBMISSIONS = gql`
  mutation proposeGnosisMultisendForSubmissions($input: GnosisBatchPaymentInput) {
    proposeGnosisMultisendForSubmissions(input: $input) {
      success
    }
  }
`;

export const PROPOSE_GNOSIS_TX_FOR_SUBMISSION = gql`
  mutation proposeGnosisTxForSubmission($input: GnosisSinglePaymentInput) {
    proposeGnosisTxForSubmission(input: $input) {
      success
    }
  }
`;

export const LINK_OFF_PLATFORM_PAYMENT = gql`
  mutation linkOffPlatformPayment($input: OffPlatformPaymentInput) {
    linkOffPlatformPayment(input: $input) {
      success
    }
  }
`;
export const LINK_BATCH_OFF_PLATFORM_PAYMENT = gql`
  mutation linkBatchOffPlatformPayment($input: LinkBatchOffPlatformPaymentInput) {
    linkBatchOffPlatformPayment(input: $input) {
      success
    }
  }
`;
