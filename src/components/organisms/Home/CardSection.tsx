import { Flex } from 'rebass';

import ThumbnailCard from '../../molecules/ThumbnailCard';
import Section from '../../templates/Section';

const ThumbnailCardSection = () => {
  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <Section title="다른 개발자의 고민을 같이 나누고 들어요" description="프론트앤드? 백앤드? 어떤 직군이 나에게 적합할까">
      <Flex
        mb={130}
        sx={{
          display: 'gird',
          gridTemplateColumns: '1fr auto',
          gridGap: 4,
        }}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <ThumbnailCard key={new Date().getTime() + i} contents={lorem + lorem} />
        ))}
      </Flex>
    </Section>
  );
};

export default ThumbnailCardSection;
