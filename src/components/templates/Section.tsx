import { isValidElement, PropsWithChildren, ReactNode } from 'react';
import { Flex, Text } from 'rebass';

interface SectionProps {
  title: ReactNode;
  description?: string | string[];
  backgroundTheme?: 'gray' | 'white';
}

const Section = ({ title, description, backgroundTheme = 'white', children }: PropsWithChildren<SectionProps>) => (
  <Flex variant={backgroundTheme !== 'gray' ? 'screen' : 'grayScreen'} as="section" pt={120}>
    <Flex flexDirection="column" alignItems="center">
      {isValidElement(title) ? title : <Text variant="title">{title}</Text>}
      <Text variant="description" mt={12}>
        {description}
      </Text>
    </Flex>
    {children}
  </Flex>
);

export default Section;
