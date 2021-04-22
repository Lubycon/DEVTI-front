import { Flex, Text, TextProps } from 'rebass';

interface SectionProps {
  title: string | string[];
  titleProps?: TextProps;
  description?: string | string[];
  backgroundTheme?: 'gray' | 'white';
  children: React.ReactNode;
}

const Section = ({ title, description, backgroundTheme = 'white', children, titleProps }: SectionProps) => (
  <Flex variant={backgroundTheme !== 'gray' ? 'screen' : 'grayScreen'} as="section" pt={120}>
    <Flex flexDirection="column" alignItems="center">
      <Text variant="title" {...titleProps}>
        {title}
      </Text>
      <Text variant="description" mt={12}>
        {description}
      </Text>
    </Flex>
    {children}
  </Flex>
);

export default Section;
