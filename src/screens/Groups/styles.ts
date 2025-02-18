import styled from 'styled-components/native'
import { StyledProps } from '../../theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_600};
  padding: 24px;
`
