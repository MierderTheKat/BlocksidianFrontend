import AnimatedTransition from "../AnimatedTransition";

// En caso de tener una ruta mal, o cualquier error, se redirigira aqui para mostrarlo.
function ErrorView() {
  return (
    <AnimatedTransition>
      <ErrorItem />
    </AnimatedTransition>
  );
}

export default ErrorView;

function ErrorItem() {
  return (
    <>
      <h1 className="text-xl font-bold dark:text-white">404</h1>
      <h2 className="text-xl font-bold dark:text-white">Not Found</h2>
    </>
  );
}