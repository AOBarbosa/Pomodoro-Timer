import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const MinutesAmountInput = styled(BaseInput)`
  input[type='number']::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  width: 4rem;
  display: flex;
  align-items: center;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

const BaseInputButton = styled.button`
  width: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IncreaseInputButton = styled(BaseInputButton)`
  background: transparent;
  color: ${(props) => props.theme['gray-500']};
  border: 0;
  margin-left: -1.2rem;
`

export const DecreaseInputButton = styled(BaseInputButton)`
  background: transparent;
  color: ${(props) => props.theme['gray-500']};
  border: 0;
  margin-right: -1.2rem;
`
