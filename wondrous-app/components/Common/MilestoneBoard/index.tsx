import CommentsIcon from 'components/Icons/comments';
import { PRIVACY_LEVEL, TASK_STATUS_DONE } from 'utils/constants';
import { MilestoneProgress } from 'components/Common/MilestoneProgress';
import {
  BoardsCardSubheader,
  BoardsCardBody,
  BoardsPrivacyLabel,
  BoardsCardFooter,
  BoardsCardHeader,
  BoardsCardBodyDescription,
  BoardsCardBodyTitle,
  BoardsCardMedia,
} from 'components/Common/Boards/styles';
import { PodName, PodWrapper } from 'components/Common/Task/styles';
import PodIcon from 'components/Icons/podIcon';
import { useRouter } from 'next/router';
import { CompletedIcon } from 'components/Icons/statusIcons';
import { RichTextViewer } from 'components/RichText';
import EmptyStateBoards from 'components/EmptyStateBoards';
import { SafeImage } from '../Image';
import { MilestoneCard, MilestoneCardTitle, MilestoneIcon, MilestoneProgressWrapper } from './styles';

export default function Board({ tasks, handleCardClick }) {
  const router = useRouter();

  const goToPod = (podId) => {
    router.push(`/pod/${podId}/boards`, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      {tasks?.length ? (
        tasks.map((milestone) => {
          const coverMedia = milestone?.media?.find((media) => media.type === 'image');
          return (
            <MilestoneCard onClick={() => handleCardClick(milestone)} key={milestone.id}>
              <BoardsCardHeader>
                <BoardsCardSubheader>
                  <MilestoneIcon />
                  <MilestoneCardTitle>Milestone</MilestoneCardTitle>
                  <BoardsPrivacyLabel>
                    {milestone?.privacyLevel === PRIVACY_LEVEL.public ? 'Public' : 'Members'}
                  </BoardsPrivacyLabel>
                  {milestone?.status === TASK_STATUS_DONE && <CompletedIcon />}
                </BoardsCardSubheader>
              </BoardsCardHeader>
              <BoardsCardBody>
                <BoardsCardBodyTitle>{milestone.title}</BoardsCardBodyTitle>
                <BoardsCardBodyDescription>
                  <RichTextViewer text={milestone.description} />
                </BoardsCardBodyDescription>
                <MilestoneProgressWrapper>
                  <MilestoneProgress milestoneId={milestone.id} />
                </MilestoneProgressWrapper>
                {coverMedia ? (
                  <BoardsCardMedia>
                    <SafeImage
                      useNextImage={false}
                      style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      src={coverMedia.slug}
                    />
                  </BoardsCardMedia>
                ) : null}
                {milestone?.podName && (
                  <PodWrapper
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      goToPod(milestone?.podId);
                    }}
                  >
                    <PodIcon
                      color={milestone?.podColor}
                      style={{
                        width: '26px',
                        height: '26px',
                        marginRight: '8px',
                      }}
                    />
                    <PodName>{milestone?.podName}</PodName>
                  </PodWrapper>
                )}
              </BoardsCardBody>
              <BoardsCardFooter>
                <CommentsIcon />
                {milestone.commentCount || 0}
              </BoardsCardFooter>
            </MilestoneCard>
          );
        })
      ) : (
        <EmptyStateBoards hidePlaceholder status="created" fullWidth />
      )}
    </>
  );
}
