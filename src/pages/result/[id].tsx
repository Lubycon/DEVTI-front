import { useRouter } from 'next/router';

const Result = () => {
  const { query: { id } } = useRouter();
  return (
    <h1>
      RESULT-
      {`${id}`}
    </h1>
  );
};

export default Result;
