import Section from '../../templates/Section';

const PHONE = 'https://user-images.githubusercontent.com/39829378/115968291-24f7b380-a572-11eb-99a4-e7ee4e03517e.png';

const PreviewSection = () => (
  <Section title={'믿고 따라오세요\nDEVTI는 결과를 이렇게 보여줘요'} description="루룰" backgroundTheme="gray">
    <img src={PHONE} alt="DEVTI 결과 화면" width={369} />
  </Section>
);

export default PreviewSection;
