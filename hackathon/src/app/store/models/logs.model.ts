export interface LOGS {
    logs: LogsData;
}

export interface LogsData {
    ideaNumber: number;
    ideaTitle: string;
    ideaDesc:String;
    owner:String;
    action:String;
    commentsID?:number;
}
