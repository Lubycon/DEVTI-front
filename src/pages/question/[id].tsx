import Link from 'next/link';
import { useRouter } from 'next/router';

const Question = () => {
  const { query: { id } } = useRouter();

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
