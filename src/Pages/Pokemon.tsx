import { useParams } from "react-router-dom";
type Props = {};

const Pokemon = (props: Props) => {
  const params = useParams();

  console.log(params);
  return (
    <main className="flex items-center justify-center">
      <blockquote>
        <pre>
          <code>{JSON.stringify(params, null, 2)}</code>
        </pre>
      </blockquote>
    </main>
  );
};

export default Pokemon;
