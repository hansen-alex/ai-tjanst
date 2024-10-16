import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      {isRouteErrorResponse(error) ? (
        <>
          <h1>Oops!</h1>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
        </>
      ) : (
        <>
          <h1>Oops!</h1>
          <h2>Sorry, an unexpected error has occurred.</h2>
        </>
      )}

      <Link to="/">
        <button type="button">Return</button>
      </Link>
    </main>
  );
};

export default ErrorPage;
