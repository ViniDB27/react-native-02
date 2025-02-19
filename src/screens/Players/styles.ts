import styled, { css } from 'styled-components/native'
import { StyledProps } from '../../theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_700};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`

export const NumbersOfPlayers = styled.Text`
  ${({ theme }: StyledProps) => css`
    color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }: StyledProps) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }: StyledProps) => theme.FONT_SIZE.SM}px;
  `}
`
