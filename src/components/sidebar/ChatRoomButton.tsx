'use client';

import { Close, Edit, PersonOutline } from '@emotion-icons/material-rounded';
import styled from '@emotion/styled';

import { Flex } from '@/components/common';

const UserWrapper = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 10px 1rem 10px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--button-secondary);

  :hover {
    background-color: var(--button-primary);
    color: var(--text-accent);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

    > * {
      visibility: visible;
    }
  }
`;

const UserIcon = styled(PersonOutline)`
  padding: 0;
  margin: 0;
  margin-right: 10px;
`;

const NotiBadge = styled.span`
  color: var(--button-primary);
  background-color: var(--button-secondary);
  border-radius: 7px;
  height: 22px;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled(Flex)`
  visibility: hidden;
  color: var(--button-secondary) !important;
`;

const EditIcon = styled(Edit)`
  margin-right: 8px;
  :hover {
    color: var(--text-accent);
  }
`;

const CloseIcon = styled(Close)`
  :hover {
    color: var(--text-accent);
  }
`;

interface ChatroomButtonProps {
  id: string;
  notiCnt?: number;
}

const ChatRoomButton = ({ id, notiCnt }: ChatroomButtonProps) => {
  return (
    <Button>
      <UserWrapper>
        <UserIcon width={36} />
        {id}
      </UserWrapper>
      {notiCnt ? (
        <NotiBadge>{notiCnt}</NotiBadge>
      ) : (
        <ButtonWrapper>
          <EditIcon width={20} />
          <CloseIcon width={24} />
        </ButtonWrapper>
      )}
    </Button>
  );
};
export default ChatRoomButton;
