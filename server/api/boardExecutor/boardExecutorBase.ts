export interface IBoardExecutor {
    authrize: (token: string) => boolean;
}

export class IBoardExecutor {
    authrize = (token: string) => false;
}