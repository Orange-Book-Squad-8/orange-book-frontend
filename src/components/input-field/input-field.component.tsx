import { InputFieldContainer, Input, InputLabel, ErrorMessage } from './index';

function InputField(props: any) {
  const { field, meta, name, title, tag = 'input', ...otherProps } = props;

  return (
    <>
      <InputFieldContainer textarea={tag === 'textarea'}>
        <Input
          textarea={tag === 'textarea'}
          as={tag}
          id={name}
          {...field}
          {...otherProps}
        />
        <InputLabel
          textarea={tag === 'textarea'}
          shrink={field?.value}
          htmlFor={name}
        >
          {title}
        </InputLabel>
      </InputFieldContainer>
      {meta?.touched && meta?.error && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </>
  );
}

export default InputField;
