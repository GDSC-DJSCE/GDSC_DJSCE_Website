import React, { useState } from 'react'
import TeamButton from '../components/teams/teamButton'
import CoreTeam from '../components/teams/coreTeam'
import CocomTeam from '../components/teams/cocomTeam'

const Team = () => {
    const [committee, setCommittee] = useState('core');

    const coreButtonHandler = () => {
        setCommittee('core')
    }

    const cocomButtonHandler = () => {
        setCommittee('cocom')
    }

    return (
        <div className="p-0 mt-20">
            <div className="p-8 flex flex-col items-center sm:flex-row sm:justify-center">
                <TeamButton onClickHandler={coreButtonHandler}>Core</TeamButton>
                <TeamButton onClickHandler={cocomButtonHandler}> Co-Committee </TeamButton>
            </div>
            {committee === 'core' ? <CoreTeam /> : <CocomTeam />}
        </div>
    )
}

export default Team;