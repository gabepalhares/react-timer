import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>My History</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Start</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Task 1</td>
                            <td>20 minutes</td>
                            <td>About X months ago</td>
                            <td>
                                <Status statusColorState="blue">Completed</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task 1</td>
                            <td>20 minutes</td>
                            <td>About X months ago</td>
                            <td>
                                <Status statusColorState="yellow">In progress</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task 1</td>
                            <td>20 minutes</td>
                            <td>About X months ago</td>
                            <td>
                                <Status statusColorState="red">Paused</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task 1</td>
                            <td>20 minutes</td>
                            <td>About X months ago</td>
                            <td>
                                <Status statusColorState="blue">Completed</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}