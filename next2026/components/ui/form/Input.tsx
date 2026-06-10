import React, { BaseSyntheticEvent, type ReactNode } from "react";
import { useController, type Control, type FieldValues, type Path } from "react-hook-form";

interface ITextInputProps<T extends FieldValues> {
  className?: string;
  name: Path<T>;
  type?: React.HTMLInputTypeAttribute;
  control: Control<T>,
  errMsg?: string,
  placeholder?: string,
  multiple?:boolean
}

interface ISingleOption{
  label: ReactNode, value: string
}

interface ISelectInputProps<T extends FieldValues> {
  className?: string;
  name: Path<T>;
  control: Control<T>;
  errMsg?: string;
  options: Array<ISingleOption>
}

export const TextInput = <T extends FieldValues>({className = "",name,type = "text", control, errMsg='', placeholder="Enter your value"}: Readonly<ITextInputProps<T>>) => {
  // self state manage 
  const {field} = useController({
    name: name,
    control: control
  })
  return (
    <>
      <input
        className={`w-full p-2 border border-gray-400 shadow-md rounded-md bg-gray-50 ${className}`}
        type={type}
        // {...field}
        onChange={(e) => {
          if(type === 'date') {
            // for date type 
            field.onChange(e.target.value ? new Date(e.target.value) : undefined)
          } else {
            // for other data type
            field.onChange(e.target.value)
          }
        }}
        placeholder={placeholder}
      />
      <span className="text-red-700 text-sm font-light italic">{errMsg}</span>
    </>
  );
};



export const FileInput = <T extends FieldValues>({className = "",name, multiple=false, control, errMsg=''}: Readonly<ITextInputProps<T>>) => {
  // self state manage 
  const {field} = useController({
    name: name,
    control: control
  })
  return (
    <>
      <input
        className={`w-full p-2 border border-gray-400 shadow-md rounded-md bg-gray-50 ${className}`}
        type = "file"
        multiple = {multiple}
        onChange = {(e: BaseSyntheticEvent) => {
          const file = Object.values(e.target.files)
          if(multiple) {
            field.onChange(file)
          } else {
            field.onChange(file[0]) 
          }
        }}
        />
      <span className="text-red-700 text-sm font-light italic">{errMsg}</span>
    </>
  );
};

export const SelectInput = <T extends FieldValues>({
  className = "",
  name,
  control,
  errMsg = "",
  options
}: Readonly<ISelectInputProps<T>>) => {
  // self state manage
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>  
      <select
        className={`w-full p-2 border border-gray-400 shadow-md rounded-md bg-gray-50 ${className}`}
        {...field}
      >
        <option value="">--Select Any one--</option>
        {
          options && options.map((option: ISingleOption) => {
            return <option key={option.value} value={option.value}>
              {option.label}
            </option>
          })
        }
      </select>
      <span className="text-red-700 text-sm font-light italic">{errMsg}</span>
    </>
  );
};



// export const TextInput = ({className = "",name,type = "text", handleChange}: Readonly<ITextInputProps>) => {
//   // self state manage 
//   return (
//     <input
//       className={`w-full p-2 border border-gray-400 shadow-md rounded-md bg-gray-50 ${className}`}
//       id={name}
//       type={type}
//       name={name}
//       onChange={handleChange}
//       placeholder={`Enter your ${name}`}
//     />
//   );
// };
