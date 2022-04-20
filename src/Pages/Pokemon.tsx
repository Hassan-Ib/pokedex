import { useParams } from "react-router-dom";
import usePokemon from "../Query/usePokemon";
type Props = {};

const Pokemon = (props: Props) => {
  const params = useParams();
  const { data, error, isLoading, isError } = usePokemon(params.id);

  if (isLoading) {
    return (
      <p className="h-screen flex items-center justify-center">loading ...</p>
    );
  }
  if (isError || !data) {
    return (
      <p className="h-screen flex items-center justify-center">
        something went wrong :), It appears your are not connected to the
        internet
      </p>
    );
  }
  // console.log(params);
  return (
    <main className="">
      {/* little nav , (back btn) */}
      {/* image */}
      {/* name */}

      <div>
        <blockquote>
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </blockquote>
      </div>
    </main>
  );
};

export default Pokemon;
