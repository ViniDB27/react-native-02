import styled from 'styled-components/native'
import { StyledProps } from '../../theme'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }: StyledProps) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }: StyledProps) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: StyledProps) => theme.COLORS.WHITE};
`

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }: StyledProps) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: StyledProps) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_300};
`