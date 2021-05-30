import useQueryParam from '~hooks/useQueryParam';

const Result = () => {
  const {
    query: { id },
  } = useQueryParam<{ id: string }>();

  return (
    <h1>
      RESULT-
      {`${id}`}
    </h1>
  );
};

export default Result;
