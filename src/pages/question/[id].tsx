import Link from 'next/link';

import useQueryParam from '../../hooks/useQueryParam';

const Question = () => {
  const { query: { id } } = useQueryParam<{ id:string }>();

  return (
    <div>
      <h1>
        Question-
        {id}
      </h1>
      <Link href="/result/1">
        <a>RESULT</a>
      </Link>
    </div>
  );
};

export default Question;
