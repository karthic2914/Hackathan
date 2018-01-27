export interface NEWS{
    news : IdeaPub
}

export interface IdeaPub {
    date: Date;
    newsTitle: String;
    newsDescription: String;
    newsAction: boolean;
    title: string;
    description: string;
}
