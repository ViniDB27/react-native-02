import styled, { css } from 'styled-components/native'
import { StyledProps } from '../../theme'
import { TouchableOpacity } from 'react-native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }: StyledProps & ButtonProps) => {
    if (type === 'PRIMARY') return theme.COLORS.GREEN_700
    return theme.COLORS.RED_DARK
  }};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  ${({ theme }: StyledProps) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`
