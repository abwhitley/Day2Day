
export interface UsersData {
    userName: string,
    notes: NoteData[]
}

export interface NoteData {
    mainText: string,
    subText: string,
    icon: string,
    isFinished: boolean
}

const user1: UsersData = {
    userName: "Austin",
    notes: [{ mainText:"This is the main text for Austin's first note", subText:"This is the sub text for Austin's first note", icon: "Calendar", isFinished: false }, { mainText:"This is the main text for Austin's second note", subText:"This is the sub text for Austin's second note", icon: "Star", isFinished: false }]
}
const user2: UsersData = {
    userName: "Blake",
    notes: [{ mainText:"This is the main text for Blake's first note", subText:"This is the sub text for Blake's first note", icon: "Star", isFinished: true }]
}
const user3: UsersData = {
    userName: "Lexie",
    notes: [{ mainText:"This is the main text for Lexie's first note", subText:"This is the sub text for Lexie's first note", icon: "Star", isFinished: false }]
}

export const users: UsersData[] = [user1, user2, user3]
