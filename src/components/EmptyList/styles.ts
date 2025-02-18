import styled from 'styled-components/native'
import { StyledProps } from '../../theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }: StyledProps) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: StyledProps) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_300};
`