import React from "react";
import { StyleSheet, KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";
import { FormControl, Input, WarningOutlineIcon } from "native-base";

type FormInputProps = {
  label: string;
  type: "text" | "password";
  defaultValue?: string;
  warningMsg?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  value: string;
  onChange: Function;
};

const FormInput = ({
  label,
  type,
  defaultValue,
  warningMsg,
  keyboardType,
  returnKeyType,
  value, 
  onChange
}: FormInputProps) => {
  return (
    <FormControl isRequired>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        type={type}
        defaultValue={defaultValue || ""}
        blurOnSubmit
        isInvalid={false}
        variant="outline"
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        value={value}
        // @ts-ignore
        onChangeText={onChange}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {warningMsg}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
