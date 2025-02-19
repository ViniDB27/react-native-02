import { TextInput, TextInputProps } from 'react-native'
import React from 'react'

import { Container } from './styles'
import theme from '../../theme'

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  return <Container placeholderTextColor={theme.COLORS.GRAY_300} ref={inputRef} {...rest} />
}
