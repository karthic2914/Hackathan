export interface LOGS {
    logs: Logs;
}

export interface Logs {
    ideaNumber: number;
    ideaTitle: string;
    ideaDesc: String;
    owner: String;
    action: String;
    commentsID?: number;
}
