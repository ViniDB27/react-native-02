import styled from 'styled-components/native'
import { StyledProps } from '../../theme'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }: StyledProps) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))`
  margin-right: 8px;
  align-self: center;
`
