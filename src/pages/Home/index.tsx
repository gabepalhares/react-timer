import { Play } from "phosphor-react"; 
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I'm going to work on</label>
          <TaskInput
            id="task"
            placeholder="Give a name to your task"
          />

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
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

        <StartCountdownButton type="submit">
            <Play size={24}/>
            Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
