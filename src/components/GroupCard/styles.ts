import styled from 'styled-components/native'
import { StyledProps } from '../../theme'
import { TouchableOpacity } from 'react-native'
import { UsersThree } from 'phosphor-react-native'
import { css } from 'styled-components'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }: StyledProps) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  ${({ theme }: StyledProps) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const Icon = styled(UsersThree).attrs(({ theme }: StyledProps) => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
  weight: 'fill',
}))`
  margin-right: 8px;
`
