import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCount(data) {

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
