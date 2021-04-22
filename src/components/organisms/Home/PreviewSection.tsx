import Section from '../../templates/Section';

const PHONE = 'https://user-images.githubusercontent.com/39829378/115714206-d3082f80-a3b1-11eb-9dcd-5e39aeff9de4.png';

const PreviewSection = () => (
  <Section title={'믿고 따라오세요\nDEVTI는 결과를 이렇게 보여줘요'} description="루룰" backgroundTheme="gray">
    <img src={PHONE} alt="DEVTI 결과 화면" width={427} />
  </Section>
);

export default PreviewSection;
