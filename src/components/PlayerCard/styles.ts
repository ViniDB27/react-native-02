import styled, { css } from 'styled-components/native'
import { StyledProps } from '../../theme'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background: ${({ theme }: StyledProps) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const Name = styled.Text`
  flex: 1;
  ${({ theme }: StyledProps) =>
    css`
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_200};
    `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }: StyledProps) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`
