import { Merge } from '@types';
import { cloneElement, isValidElement, PropsWithChildren, ReactNode } from 'react';
import { Flex, FlexProps, Text } from 'rebass';

export enum SectionTheme {
  White = 'whiteScreen',
  Gray = 'grayScreen',
  Blue = 'blueScreen',
}
interface SectionProps {
  title: ReactNode;
  description?: ReactNode;
  backgroundTheme?: SectionTheme;
}

const Section = ({
  title,
  description,
  backgroundTheme,
  children,
  ...props
}: PropsWithChildren<Merge<SectionProps, FlexProps>>) => (
  <Flex variant={backgroundTheme ?? SectionTheme.White} as="section" pt={140} {...props}>
    <Flex flexDirection="column" alignItems="center">
      {isValidElement(title) ? title : <Text variant="title">{title}</Text>}
      {isValidElement(description) ? (
        cloneElement(description, { my: 12 })
      ) : (
        <Text variant="description" my={12}>
          {description}
        </Text>
      )}
    </Flex>
    {children}
  </Flex>
);

export default Section;
