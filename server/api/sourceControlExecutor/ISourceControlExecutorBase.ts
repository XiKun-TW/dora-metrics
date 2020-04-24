export interface ISourceControlExecutor {
    authrize: (token: string) => boolean;
}

export class ISourceControlExecutor {
    authrize = (token: string) => false;
}