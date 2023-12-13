export default function ErrorForm({ touched, errors, ...props }) {
  return (
    <>
      {touched && errors && (
        <p {...props}>
          {errors}
        </p>
      )}
    </>
  );
}
