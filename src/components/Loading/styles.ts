import styled from 'styled-components/native'
import { StyledProps } from '../../theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_600};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: StyledProps) => ({
    color: theme.COLORS.GREEN_700,
  })
)``
