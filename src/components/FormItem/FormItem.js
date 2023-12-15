import { useField } from "formik";
import React from "react";

function FormItem({ label, children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="relative">
      <div className="mt-7">
        <label className="text-ink font-spartan">
          <span className="text-base">{label}</span>
          {React.cloneElement(children, { ...field, ...props })}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-textRed600 absolute bottom font-spartan text-base">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}

export default FormItem;
