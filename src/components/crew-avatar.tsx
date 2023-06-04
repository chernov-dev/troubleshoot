'use client'

import { CrewProps } from "@/types"
import Avatar from "react-avatar"

const CrewAvatar = ({ crew }: { crew: CrewProps }) => {
    return (
        <Avatar round={true} githubHandle={crew.avatar?.githubHandle} email={crew.avatar?.email}
            name={crew.name} size="60" />
    )
}

export default CrewAvatar