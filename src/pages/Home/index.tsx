import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform the task'),
  minutesAmount: zod
  .number()
  .min(5, 'The cycle needs to be at least 5 minutes.')
  .max(60, 'The cycle needs to be at most 60 minutes.'),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCount(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task;
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCount)} action="">
        <FormContainer>
          <label htmlFor="task">I'm going to work on</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Give a name to your task"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Jujutsu Kaisen" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24}/>
            Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
