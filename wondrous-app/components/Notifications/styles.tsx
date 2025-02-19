import styled from 'styled-components';
import palette from 'theme/palette';

export const NotificationsBoardWrapper = styled.div`
  position: absolute;
  width: 320px;
  min-height: 30px;
  overflow-y: scroll;
  max-height: 60vh;
  padding: 0px;
  margin-left: -200px;
  margin-top: 20px;
  top: 100%;
  border-radius: 5px;
  background: ${palette.black92};
  transition: 0.2s display;
  z-index: 100;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  font-size: 13px;
  overscroll-behavior: contain;
`;

export const NotificationsBoardArrow = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 100%;
  left: 13%;
  /* drop shadow */
  box-shadow: 0px 34px 84px rgba(0, 0, 0, 0.55);
  background: ${palette.black92};
  border-radius: 4px;
  transform: rotate(45deg);

  margin-left: 0px;
  margin-top: 13px;

  content: '';
  z-index: 99;
`;

export const NotificationsBoardOverArrow = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;

  border: 0px solid transparent;

  /* drop shadow */
  box-shadow: 0px 34px 84px rgba(0, 0, 0, 0.55);
  background: ${palette.black92};
  border-radius: 4px;
  transform: rotate(45deg);

  margin-left: 5px;
  margin-top: 8px;

  content: '';
  z-index: 102;
`;

export const NotificationsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding: 15px 0px;
  margin: 0px;

  height: 100%;
  line-height: 20px;

  cursor: pointer;
  pointer-events: ${(props) => (props.emptyNotifications ? 'none' : '')};

  :hover {
    background: ${(props) => (props.isNotificationViewed ? palette.black92 : palette.black97)};
  }
  background: ${(props) =>
    props.isNotificationViewed || props.emptyNotifications ? palette.black97 : palette.black92};
`;

export const NotificationItemIcon = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 50px;
  width: 27px;
  margin: 0px 15px;
`;

export const NotificationItemStatus = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  width: 10px;
  height: 10px;
  z-index: 103;
`;

export const NotificationItemBody = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: ${(props) => (props.emptyNotifications ? 'center' : 'flex-start')};
  color: ${palette.white};
`;

export const NotificationItemTimeline = styled.span`
  padding: 2px 0px 0px 4px;
  color: ${palette.black30};
  line-height: 14px;
  font-weight: 300;
`;

export const NotificationsBoardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 100%;
  width: 100%;
  padding: 15px;

  height: 50px;
  line-height: 46px;

  background: ${palette.black92};
  border-bottom: 1px solid black;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const NotificationsMarkRead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  line-height: 32px;
  cursor: pointer;
  ${(props) =>
    props.enabled
      ? `
        color: #d0b9ff;
        text-decoration: underline;
        font-weight: 500;
        `
      : `
        color: ${palette.grey75};
        text-decoration: none;
        pointer-events: none;
        `}
`;

export const NotificationsOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 97;
`;
export const NotificationsLink = styled.a`
  color: ${palette.highlightBlue};
  font-weight: 700;

  a {
    color: ${palette.highlightBlue};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const NotificationItemInner = styled.div`
  padding-top: 2px;
  color: ${palette.white};
`;

export const NotificationWrapper = styled.div`
  width: 75%;
`;

export const NotificationsContentPreview = styled.div`
  color: ${palette.grey40};
  margin-top: 7px;
`;

export const NotificationsDot = styled.span`
  height: 8px;
  width: 8px;
  background: linear-gradient(196.76deg, #ffffff -48.71%, #f93701 90.48%);
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0px 0px 2px white;
`;

export const NotificationsTitle = styled.h3``;
