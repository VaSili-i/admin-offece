export interface IUsers {
    id: number,
    name: string,
    department: string,
    phone: string | number,
    mail: string,
    password: string
}

export type IAddNews = ({ date, title, body, photo }:
    { date: string, title: string, body: string, photo: string }) => void;

