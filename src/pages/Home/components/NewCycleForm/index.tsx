import {
  DecreaseInputButton,
  FormContainer,
  IncreaseInputButton,
  MinutesAmountInput,
  MinutesContainer,
  TaskInput,
} from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { Minus, Plus } from 'phosphor-react'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-sugesttions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-sugesttions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesContainer>
        <DecreaseInputButton>
          <Minus size={16} />
        </DecreaseInputButton>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <IncreaseInputButton>
          <Plus size={16} />
        </IncreaseInputButton>
      </MinutesContainer>

      <span>minutos.</span>
    </FormContainer>
  )
}
