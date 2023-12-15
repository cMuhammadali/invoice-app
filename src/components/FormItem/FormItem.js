import { useField } from "formik";
import React from "react";

function FormItem({ label, children, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <div className="mt-4">
        <label className="text-ink">
          {label}
          {React.cloneElement(children, { ...field, ...props })}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-textRed600">{meta.error}</div>
      ) : null}
    </>
  );
}

export default FormItem;
