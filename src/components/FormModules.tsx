import {
  Autocomplete,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  LinearProgress,
  ListSubheader,
  ListSubheaderProps,
  MenuItem,
  NativeSelect,
  Radio,
  Select as MuiSelect,
  Checkbox as Check,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";

import React, { useEffect, useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import axios from "axios";
import { Controller } from "react-hook-form";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";
export const Input = React.forwardRef((props: any, ref) => {
  const { variant = "outlined", ...otherProps } = props;
  return <TextField {...otherProps} ref={ref} variant={variant} />;
});
export const PasswordInput = React.forwardRef((props: any, ref) => {
  const { variant = "outlined", ...otherProps } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <TextField
      {...otherProps}
      type={showPassword ? "text" : "password"}
      ref={ref}
      variant={variant}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});
export const PhoneInput = React.forwardRef((props: any, ref) => {
  const { variant = "outlined", ...otherProps } = props;
  return <MuiTelInput {...otherProps} ref={ref} variant={variant} />;
});
export const MultiSelect = React.forwardRef((props: any, ref) => {
  const [values, setValues] = useState([]);

  const {
    variant = "outlined",
    label = "",
    id = uuid() || label,
    onChange = (e: any) => {},
    options = [{ value: "", label: "Empty" }],
    error,
    required,
    disabled,
    helperText,
    fullWidth = false,
    ...otherProps
  } = props;
  const labelID = id + "-label";
  const renderLabel = required ? label + " *" : label;

  return (
    <FormControl error={error} fullWidth={fullWidth} disabled={disabled}>
      <InputLabel id={labelID}>{renderLabel}</InputLabel>
      <MuiSelect
        {...otherProps}
        ref={ref}
        labelId={labelID}
        id={id}
        label={renderLabel}
        value={values}
        onChange={(e: any) => {
          setValues(e.target.value);
          onChange(e);
        }}
        renderValue={(selected: any[]) => (
          <div className="flex flex-wrap gap-05">
            {selected.map((value) => (
              <Chip
                key={uuid()}
                label={
                  options.find((item: { value: any }) => item.value === value)
                    .label
                }
              />
            ))}
          </div>
        )}
        multiple
      >
        {options.map(({ value, label }: { value: any; label: any }) => (
          <MenuItem key={uuid()} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText>{helperText || ""}</FormHelperText>
    </FormControl>
  );
});
export const ReactHookFormSelectMulti = React.forwardRef((props: any, ref) => {
  const { name, label, control, defaultValue, children, options, ...rest } =
    props;
  const labelId = `${name}-label`;
  return (
    <FormControl {...rest}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <MuiSelect
            {...field}
            defaultValue={[]}
            multiple
            labelId={labelId}
            label={label}
          >
            {options.map(({ value, label }: { value: any; label: any }) => (
              <MenuItem key={uuid()} value={value}>
                {label}
              </MenuItem>
            ))}
          </MuiSelect>
        )}
      />
    </FormControl>
  );
});
export const Select = React.forwardRef((props: any, ref) => {
  const { variant = "outlined", options = [{}], ...rest } = props;
  return (
    <TextField {...rest} ref={ref} variant={variant} defaultValue="" select>
      {options.map((option: any) => (
        <MenuItem key={uuid()} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
});
// export const SelectLanguage = React.forwardRef((props: any, ref) => {
//   const { variant = "outlined", ...otherProps } = props;

//   return (
//     <TextField
//       {...otherProps}
//       ref={ref}
//       variant={variant}
//       defaultValue=""
//       select
//     >
//       {langs.map(
//         (lang: {
//           value: string | number | readonly string[] | undefined;
//           label:
//             | string
//             | number
//             | boolean
//             | React.ReactElement<any, string | React.JSXElementConstructor<any>>
//             | React.ReactFragment
//             | React.ReactPortal
//             | null
//             | undefined;
//         }) => (
//           <MenuItem key={uuid()} value={lang.value}>
//             {lang.label}
//           </MenuItem>
//         )
//       )}
//     </TextField>
//   );
// });
export const SelectCity = React.forwardRef((props: any, ref) => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const { variant = "outlined", countryCode = "VE", ...otherProps } = props;
  const url =
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json";
  useEffect(() => {
    setLoading(true);
    async function load() {
      const res = await axios.get(url);

      if (res.status != 200) return;
      setCities(res.data);

      setCity(
        cities
          .filter((city) => city["country_code"] === countryCode)
          .map(({ name }) => name)
      );
      setLoading(false);
    }
    load();
    return () => {};
  }, []);

  useEffect(() => {
    if (cities.length <= 0) return;
    setLoading(true);
    async function load() {
      setCity(
        cities
          .filter((city) => city["country_code"] === countryCode)
          .map(({ name }) => name)
      );
      setLoading(false);
    }
    load();

    return () => {};
  }, [countryCode]);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Autocomplete
      disablePortal
      options={city}
      renderInput={(params) => (
        <TextField {...params} {...otherProps} ref={ref} variant={variant} />
      )}
    />
  );
});

// export const AutocompleteCountry = React.forwardRef((props: any, ref) => {
//   const {
//     label = "",
//     placeholder = "",
//     onChange = (newValue: any) => {},
//     inputProps = [],
//     multiple = false,

//     ...rest
//   } = props;
//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selected, setSelected] = useState();
//   useEffect(() => {
//     setLoading(true);
//     // const url =
//     //   "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json";
//     async function load() {
//       const res = await getCountries();
//       // var userLang = navigator.language;
//       //   {
//       //     "code": "AF",
//       //     "name": "Afghanistan"
//       // },
//       if (res.status != 200) return;

//       function format(): object[] {
//         const arr: object[] = [];
//         res.data.map(({ code, name }: { code: string; name: string }) =>
//           arr.push({
//             label: name,
//             value: code,
//           })
//         );
//         return arr;
//       }
//       setOptions(format());
//       setLoading(false);
//     }

//     load();

//     return () => {};
//   }, []);
//   if (loading) {
//     return <LinearProgress />;
//   }
//   return (
//     <Autocomplete
//       {...rest}
//       ref={ref}
//       options={options}
//       getOptionLabel={(opt:any) => opt["label"]}
//       isOptionEqualToValue={(option:any, value) =>
//         option["value"] === value["value"]
//       }
//       value={selected}
//       variant="outlined"
//       multiple={multiple}
//       onChange={(e, newValue: any) => {
//         setSelected(newValue);
//         onChange(newValue.map((val: any) => val.value));
//       }}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           {...inputProps}
//           error={rest.error || false}
//           helperText={rest.helperText || ""}
//           required={rest.required}
//           variant="outlined"
//           label={label}
//           placeholder={placeholder}
//         />
//       )}
//     />
//   );
// });

// export const AutocompleteCurrency = (props: any) => {
//   const [loading, setLoading] = useState(false);
//   const [currencies, setCurrencies] = useState([]);
//   const url =
//     "https://raw.githubusercontent.com/xsolla/currency-format/master/currency-format.json";
//   useEffect(() => {
//     setLoading(true);
//     async function get() {
//       const { data } = await axios.get(url);
//       setCurrencies(Object.keys(data));
//       setLoading(false);
//     }
//     get();
//     return () => {};
//   }, []);
//   if (loading) {
//     return <LinearProgress />;
//   }
//   return (
//     <Autocomplete
//       // id="combo-box-demo"
//       options={currencies}
//       renderInput={(params) => <TextField {...props} {...params} />}
//     />
//   );
// };

// export const SelectCountry = React.forwardRef((props: any, ref) => {
//   const {
//     variant = "outlined",
//     label = "",
//     name = uuid(),
//     ...otherProps
//   } = props;
//   const [loading, setLoading] = useState(true);
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     // const url =
//     //   "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json";
//     async function load() {
//       const res = await getCountries();
//       if (res.status != 200) return;
//       var userLang = navigator.language;
//       async function format(): Promise<object[]> {
//         const arr: object[] | PromiseLike<object[]> = [];
//         res.data.map(({ name, code }: any) =>
//           arr.push({
//             name: name,
//             code: code,
//           })
//         );
//         return arr;
//       }
//       const arr = await format();
//       setCountries(arr);
//       setLoading(false);
//     }

//     load();

//     return () => {};
//   }, []);

//   if (loading) {
//     return <LinearProgress />;
//   }

//   return (
//     <FormControl variant={variant}>
//       <InputLabel variant={variant} htmlFor={name}>
//         {label}
//       </InputLabel>
//       <NativeSelect
//         {...otherProps}
//         ref={ref}
//         name={name}
//         input={<OutlinedInput label={label} />}
//         defaultValue=""
//         inputProps={{
//           name: name,
//           variant: variant,
//         }}
//       >
//         <option value=""></option>
//         {countries.map(({ name, code }) => (
//           <option key={uuid()} value={code}>
//             {name}
//           </option>
//         ))}
//       </NativeSelect>
//     </FormControl>
//   );
// });

export const Checkbox = React.forwardRef((props: any) => {
  const { label, onClick = (e: any) => {}, ...rest } = props;
  const [checked, setChecked] = useState(false);
  return (
    <FormControlLabel
      label={label}
      control={
        <Check
          {...rest}
          error
          onClick={(e: any) => {
            setChecked(!checked);
            onClick(e);
          }}
          checked={checked}
          value={!checked} //For some reason, i have to invert the values
        />
      }
    />
  );
});

export const ChipCheckbox = React.forwardRef((props: any, ref) => {
  const {
    label,
    value,
    checked = false,
    onClick = (e: any) => {},
    ...restProps
  } = props;
  const [check, setCheck] = useState(checked);
  useEffect(() => {
    setCheck(checked);
    return () => {};
  }, [checked]);

  return (
    <Chip
      {...restProps}
      label={label}
      variant={check ? "filled" : "outlined"}
      onClick={() => {
        onClick(value);
      }}
    />
  );
});

export const MultiChipCheckbox = React.forwardRef((props: any, ref) => {
  const {
    label,
    value,
    options = [],
    onClick = (e: any) => {},
    ...restProps
  } = props;
  const [check, setCheck] = useState(false);
  const variant = check ? "filled" : "outlined";

  return (
    <Chip
      {...restProps}
      label={label}
      variant={variant}
      onClick={() => {
        setCheck(!check);
        onClick(value);
      }}
    />
  );
});
